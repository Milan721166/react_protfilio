import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./assets/componants/NavBar";
import Home from "./assets/componants/Home";
import About from "./assets/componants/About";
import Skills from "./assets/componants/Skills";
import Contact from "./assets/componants/Contact";
import Footer from "./assets/componants/Footer";
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Catch-all route to redirect unknown URLs to Home */}
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
