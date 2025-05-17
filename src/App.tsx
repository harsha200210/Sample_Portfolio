import './App.css'
import Navbar from "./component/NavBar.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import SkillsPage from "./pages/SkillPage.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import Footer from "./pages/Footer.tsx";

function App() {

  return (
      <>
          <Navbar />
          <HomePage />
          <AboutPage />
          <SkillsPage />
          <EducationPage />
          <ProjectPage />
          <Footer />
      </>
  )
}

export default App
