import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Strengths from "@/components/Strengths";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import Philosophy from "@/components/Philosophy";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Strengths />
        <Experience />
        <Tools />
        <Philosophy />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
