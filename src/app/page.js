
import DemoHero from "@/components/DemoHero";
import Count from "@/components/Count";
import AboutPage from "@/components/About";
import FAQAndConsultation from "@/components/Factual";
import Court from "@/components/court";


export default function Home() {
  return (
    <>
      <DemoHero />
      <Count />
      
      <AboutPage show={false} />
       <Court/>
      <FAQAndConsultation />
      


    </>
  );
}
