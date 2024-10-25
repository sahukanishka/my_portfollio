import Aboutskills from "@/components/Aboutskills";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mywork from "@/components/Mywork";
import ProjectBar from "@/components/ProjetBar";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <Hero />
      <Aboutskills />
      <Mywork />
      <ProjectBar />
      <Contact />
      <Footer />
    </div>
  );
}
