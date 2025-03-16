import Footer from "./assets/components/Footer/Footer"
import Navbar from "./assets/components/Navbar/Navbar"
import AboutSection from "./Pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./Pages/Home/sections/HeroSection/HeroSection"
import ProjectsSection from "./Pages/Home/sections/ProjectsSection"



const App: React.FC = () => {
 
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
