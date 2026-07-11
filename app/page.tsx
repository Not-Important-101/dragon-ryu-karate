import ScrollProgress from "@/components/ScrollProgress";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Instructors from "@/components/Instructors";
import Team from "@/components/Team";
import Classes from "@/components/Classes";
import Events from "@/components/Events";
import CtaBanner from "@/components/CtaBanner";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <NavBar />
      <Hero />
      <About />
      <Divider />
      <Instructors />
      <Divider />
      <Team />
      <Divider />
      <Classes />
      <Events />
      <CtaBanner />
      <Registration />
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}
