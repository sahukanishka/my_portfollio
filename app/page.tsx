import Aboutskills from "@/components/Aboutskills";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Mywork from "@/components/Mywork";
import ProjectBar from "@/components/ProjetBar";
import { generatePersonSchema } from "@/components/structured-data";
import Script from "next/script";

export default function Home() {
  //kanishka
  return (
    <div className=" ">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      {/* <Header /> */}
      <Hero />
      <Aboutskills />
      <Mywork />
      <ProjectBar />
      <Contact />
    </div>
  );
}
