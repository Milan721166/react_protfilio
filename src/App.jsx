import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./assets/componants/NavBar";
import Home from "./assets/componants/Home";
import About from "./assets/componants/About";
import Skills from "./assets/componants/Skills";
import Contact from "./assets/componants/Contact";
import Education from "./assets/componants/Education"; // Education component
import Blog from "./assets/componants/Blog";           // Blog component
import Footer from "./assets/componants/Footer";
import FullPortfolio from "./assets/componants/FullPortfolio";
import MyProjects from "./assets/componants/MyProjects"; // ✅ New Project Page

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<FullPortfolio />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/education" element={<Education />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<MyProjects />} /> {/* ✅ New Route */}
                <Route path="*" element={<FullPortfolio />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
