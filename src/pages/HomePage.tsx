import { MotionConfig } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import Stats from "../components/Stats";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Architecture from "../components/Architecture";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  const { theme, toggle } = useTheme();

  return (
    <MotionConfig reducedMotion="user">
    <div className="bg-base text-fg min-h-screen">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <TechStack />
        <Architecture />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}
