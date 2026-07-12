import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import TechStack from "@/components/TechStack";
import Roadmap from "@/components/Roadmap";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <TechStack />
      <Roadmap />
      <Founder />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
