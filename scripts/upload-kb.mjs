#!/usr/bin/env node
/**
 * Завантажує файл(и) бази знань до Gemini File API.
 *
 * Використання:
 *   GEMINI_API_KEY=... node scripts/upload-kb.mjs file1.pdf [file2.pdf ...]
 *
 * Результат: виводить GEMINI_FILE_URIS для Vercel Environment Variables.
 * Файли живуть 48 годин. Запускай скрипт перед важливими демо.
 *
 * Підтримувані формати: .pdf .txt .md
 */

import { readFileSync, statSync } from "fs";
import { basename, extname } from "path";

const MIME = {
  ".pdf": "application/pdf",
  ".txt": "text/plain",
  ".md":  "text/plain",
};

const apiKey = process.env.GEMINI_API_KEY?.trim();
if (!apiKey) {
  console.error("Потрібна змінна оточення: GEMINI_API_KEY=... node scripts/upload-kb.mjs <file(s)>");
  process.exit(1);
}

const files = process.argv.slice(2);
if (!files.length) {
  console.error("Вкажи файл(и): node scripts/upload-kb.mjs path/to/file.pdf");
  process.exit(1);
}

const uris = [];

for (const filePath of files) {
  const name     = basename(filePath);
  const ext      = extname(filePath).toLowerCase();
  const mimeType = MIME[ext];

  if (!mimeType) {
    console.error(`Непідтримуваний формат: ${ext}. Підтримуються: .pdf .txt .md`);
    process.exit(1);
  }

  const bytes = readFileSync(filePath);
  const size  = statSync(filePath).size;

  console.log(`\nЗавантажую ${name} (${(size / 1024).toFixed(1)} KB, ${mimeType})...`);

  // Крок 1: ініціюємо завантаження
  const initRes = await fetch(
    `https://generativelanguage.googleapis.com/upload/v1beta/files?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "X-Goog-Upload-Protocol":             "resumable",
        "X-Goog-Upload-Command":              "start",
        "X-Goog-Upload-Header-Content-Length": String(size),
        "X-Goog-Upload-Header-Content-Type":   mimeType,
        "Content-Type":                        "application/json",
      },
      body: JSON.stringify({ file: { displayName: name } }),
    }
  );

  const uploadUrl = initRes.headers.get("x-goog-upload-url");
  if (!uploadUrl) {
    const text = await initRes.text().catch(() => "");
    console.error(`Помилка ініціалізації (${initRes.status}): ${text}`);
    process.exit(1);
  }

  // Крок 2: завантажуємо вміст
  const uploadRes = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      "Content-Length":          String(size),
      "X-Goog-Upload-Offset":    "0",
      "X-Goog-Upload-Command":   "upload, finalize",
    },
    body: bytes,
  });

  const result = await uploadRes.json();

  if (!result.file?.uri) {
    console.error(`Помилка завантаження: ${JSON.stringify(result, null, 2)}`);
    process.exit(1);
  }

  const expiry = result.file.expirationTime
    ? new Date(result.file.expirationTime).toLocaleString("uk-UA")
    : "невідомо";

  console.log(`  OK  URI: ${result.file.uri}`);
  console.log(`  Дійсний до: ${expiry}`);
  uris.push(result.file.uri);
}

console.log("\n" + "=".repeat(60));
console.log("Додай в Vercel: Settings -> Environment Variables\n");
console.log(`GEMINI_FILE_URIS=${uris.join(",")}`);
console.log("\nПотім: Deployments -> остання збірка -> ... -> Redeploy");
console.log("=".repeat(60));
