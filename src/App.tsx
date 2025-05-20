import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import TimeLine from "./components/TimeLine/TimeLine";
import Modal from "./features/modal/components/Modal";
import { useTheme } from "./features/theme/store/theme";
import SkillsShowcase from "./components/Hero/SkillsShowcase";
import InViewSection from "./components/InViewSection/InViewSection";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

export default function App () {

    const { theme } = useTheme();


    return <div className={`h-screen w-full flex flex-col ${theme}`}> 
        <Modal />
        <Navbar />
        <main className="flex flex-col mt-14 gap-[200px] z-1 max-w-[1200px] mx-auto min-h-full">
            <InViewSection id="hero">
                <Hero />
                <SkillsShowcase />
            </InViewSection>
            <InViewSection id="about-me">
                <AboutMe />
            </InViewSection>
            <TimeLine />
            <InViewSection id="projects">
                <Projects />
            </InViewSection>
            <InViewSection id="skills">
                <Skills />
            </InViewSection>
            <InViewSection id="contact">
                <Contact />
            </InViewSection>
        </main>
    </div>
}