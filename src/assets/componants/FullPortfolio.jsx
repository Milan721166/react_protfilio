import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

const FullPortfolio = () => {
    return (
        <div className="full-portfolio">
            <Home />
            <About />
            <Skills />
            <Contact />
        </div>
    );
};

export default FullPortfolio;