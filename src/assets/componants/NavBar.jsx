import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 
import "../css/NavBar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cvLink, setCvLink] = useState(""); // Store CV link
    const navbarRef = useRef(null); 
    const menuToggleRef = useRef(null); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Fetch CV link from data.json
        fetch("/api/data.json")
            .then(response => response.json())
            .then(data => setCvLink(data.cvLink))
            .catch(error => console.error("Error fetching CV link:", error));
    }, []);

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

            <div className="menu-toggle" onClick={toggleMenu} ref={menuToggleRef} aria-expanded={isOpen}>
                &#9776;
            </div>

            <nav className={`navbar ${isOpen ? "active" : ""}`} ref={navbarRef}>
                <Link to="/" style={{ '--i': 1 }} onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" style={{ '--i': 2 }} onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/skills" style={{ '--i': 3 }} onClick={() => setIsOpen(false)}>Skills</Link>
                <Link to="/contact" style={{ '--i': 4 }} onClick={() => setIsOpen(false)}>Contact</Link>
                {cvLink && (
                    <a href={cvLink} download style={{ '--i': 5 }} onClick={() => setIsOpen(false)}>
                        Download CV
                    </a>
                )}
            </nav>
        </header>
    );
};

export default NavBar;
