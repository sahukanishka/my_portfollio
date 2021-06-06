import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSkills from "../components/Aboutskills";
import MyWork from "../components/Mywork";
import Footer from "../components/footer";
import ProjectBar from '../components/ProjetBar'
export default function Home() {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <Hero />
      <AboutSkills />
      <MyWork />
      <ProjectBar />
      <Footer />

    </div>
  );
}
