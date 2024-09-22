import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/experience" element={<ExpreianceSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </>
  );
};

export default App;
