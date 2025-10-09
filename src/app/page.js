
import DemoHero from "@/components/DemoHero";
import Count from "@/components/Count";
import AboutPage from "@/components/About";
import FAQAndConsultation from "@/components/Factual";


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
