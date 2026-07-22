import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackCarousel from "@/components/StackCarousel";
import ProjectsAccordion from "@/components/ProjectsAccordion";
import PathScroll from "@/components/PathScroll";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StackCarousel />
      <ProjectsAccordion />
      <PathScroll />
      <Contact />
    </>
  );
}
