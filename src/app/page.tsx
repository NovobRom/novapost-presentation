import { Slide1 } from "@/components/slides/Slide1";
import { Slide2 } from "@/components/slides/Slide2";
import { Slide3 } from "@/components/slides/Slide3";
import { Slide4 } from "@/components/slides/Slide4";
import { Slide5 } from "@/components/slides/Slide5";
import { Slide6 } from "@/components/slides/Slide6";
import { SlidePlaceholder } from "@/components/slides/SlidePlaceholder";

export default function Home() {
  return (
    <>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <SlidePlaceholder
        number={7}
        titleUa="Економіка трансформації"
        titleEn="The Economics of Transformation"
      />
      <SlidePlaceholder
        number={8}
        titleUa="Людський фактор"
        titleEn="The Human Factor"
      />
      <SlidePlaceholder
        number={9}
        titleUa="Культура Творця — 3 механіки"
        titleEn="Creator Culture — 3 mechanisms"
      />
      <SlidePlaceholder
        number={10}
        titleUa="Етика, безпека, контроль якості"
        titleEn="Ethics, Security, Quality Control"
      />
      <SlidePlaceholder
        number={11}
        titleUa="Перші 90 днів на ролі"
        titleEn="First 90 days in the role"
      />
      <SlidePlaceholder
        number={12}
        titleUa="Хто я"
        titleEn="About me"
      />
    </>
  );
}
