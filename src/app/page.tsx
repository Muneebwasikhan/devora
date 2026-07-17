import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import AiWorkflow from "@/components/sections/AiWorkflow";
import Team from "@/components/sections/Team";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <div data-screen-label="Home">
      <Hero />
      <Marquee />
      <Services />
      <AiWorkflow />
      <Team />
      <WhyUs />
      <Testimonials />
      <Faq />
    </div>
  );
}
