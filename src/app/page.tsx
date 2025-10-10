import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import WorkflowSection from "@/components/sections/WorkflowSection/WorkflowSection";
import Reveal from "@/components/utils/Reveal";
import Hubs from "@/components/sections/Hubs";

export default function Home() {
  return (
    <main>
      <div className="page-stack">
        <Hero />
        <section id="stats">
          <Reveal>
            <Stats />
          </Reveal>
        </section>
        <section id="services">
          <Reveal>
            <Services />
          </Reveal>
        </section>
        <section id="hubs">
          <Reveal>
            <Hubs />
          </Reveal>
        </section>
        <section id="steps">
          <Reveal>
            <WorkflowSection />
          </Reveal>
        </section>

        <section id="reviews">
          <Reveal>
            <Reviews />
          </Reveal>
        </section>
        <section id="gallery">
          <Reveal>
            <Gallery />
          </Reveal>
        </section>
        <section id="hubs"></section>
        <section id="faq">
          <Reveal>
            <Faq />
          </Reveal>
        </section>
        <section id="contacts">
          <Reveal>
            <Contact />
          </Reveal>
        </section>
        <section id="about">
          <Reveal>
            <About />
          </Reveal>
        </section>
      </div>
    </main>
  );
}
