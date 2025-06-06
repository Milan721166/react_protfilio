import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 
import "../css/NavBar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const menuToggleRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target) &&
                menuToggleRef.current &&
                !menuToggleRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

   
    const cvLink = "../images/CV.pdf";

    return (
        <header className="header">
            <Link to="/" className="logo" style={{ cursor: 'pointer' }}>
                Portfolio
            </Link>

            <div className="menu-toggle" onClick={toggleMenu} ref={menuToggleRef} aria-expanded={isOpen}>
                &#9776;
            </div>

            <nav className={`navbar ${isOpen ? "active" : ""}`} ref={navbarRef}>
    <Link to="/" style={{ '--i': 1 }} onClick={() => setIsOpen(false)}>Home</Link>
    <Link to="/about" style={{ '--i': 2 }} onClick={() => setIsOpen(false)}>About</Link>
    <Link to="/projects" style={{ '--i': 3 }} onClick={() => setIsOpen(false)}>Projects</Link>
    <Link to="/skills" style={{ '--i': 4 }} onClick={() => setIsOpen(false)}>Skills</Link>
    <Link to="/education" style={{ '--i': 5 }} onClick={() => setIsOpen(false)}>Education</Link>
    <Link to="/blog" style={{ '--i': 6 }} onClick={() => setIsOpen(false)}>Blog</Link>
    <Link to="/contact" style={{ '--i': 7 }} onClick={() => setIsOpen(false)}>Contact</Link>
    <a href="tel:+91 6296740204" style={{ '--i': 8 }} onClick={() => setIsOpen(false)}>Call Me</a>
    <a href={cvLink} download style={{ '--i': 9 }} onClick={() => setIsOpen(false)}>
        Download CV
    </a>
</nav>
        </header>
    );
};

export default NavBar;
