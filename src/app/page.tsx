import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import WorkflowSection from "@/components/sections/WorkflowSection/WorkflowSection";
import Hubs from "@/components/sections/Hubs";

export default function Home() {
  return (
    <main>
      <div className="page-stack">
        <Hero />
        <section id="hubs">
          <Hubs />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="services">
          <Services />
        </section>

        <section id="steps">
          <WorkflowSection />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="hubs"></section>
        <section id="faq">
          <Faq />
        </section>
        <section id="contacts">
          <Contact />
        </section>
        <section id="about">
          <About />
        </section>
      </div>
    </main>
  );
}
