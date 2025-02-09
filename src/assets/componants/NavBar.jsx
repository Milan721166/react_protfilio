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

    return (
        <header className="header">
            <Link to="/" className="logo" style={{ cursor: 'pointer' }}>
                Portfolio
            </Link>

            <div 
                className="menu-toggle" 
                onClick={toggleMenu} 
                ref={menuToggleRef} 
                aria-expanded={isOpen}
                aria-controls="navbar"
            >
                &#9776;
            </div>

            <nav className={`navbar ${isOpen ? "active" : ""}`} ref={navbarRef} id="navbar">
                <Link to="/" style={{ '--i': 1 }} onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" style={{ '--i': 2 }} onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/skills" style={{ '--i': 3 }} onClick={() => setIsOpen(false)}>Skills</Link>
                <Link to="/contact" style={{ '--i': 4 }} onClick={() => setIsOpen(false)}>Contact</Link>
                <a href="/api/Milan_Cv(1).pdf" download style={{ '--i': 5 }} onClick={() => setIsOpen(false)}>
                    Download CV
                </a>
            </nav>
        </header>
    );
};

export default NavBar;
