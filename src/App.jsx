import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExpreianceSection from "./sections/ExpreianceSection";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import SkillsSection from "./sections/SkillsSection";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExpreianceSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
};

export default App;
