
import DemoHero from "@/components/DemoHero";
import Count from "@/components/Count";
import TargetSection from "@/components/Target";
import AboutPage from "@/components/About";
import ProcessSection from "@/components/ui/process";
import FAQAndConsultation from "@/components/Factual";
import Areas from "@/components/PracticeAreas";
import MissionValues from "@/components/MissionValues";



export default function Home() {
  return (
    <>
      <DemoHero />
      <Count />
      <AboutPage show={false} />
      <FAQAndConsultation />


    </>
  );
}
