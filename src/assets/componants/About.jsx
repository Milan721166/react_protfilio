import { useEffect, useRef, useState } from "react";
import aboutData from "../../../public/api/about.json";
import "../css/About.css";

const About = () => {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    // Image Slider Logic
    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutData.image.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(imageInterval);
    }, []);

    return (
        <section ref={aboutRef} id="about" className={`about ${isVisible ? "visible" : ""}`}>
            <div className="about-content">
                <h2 id="about-me">{aboutData.title}</h2>
                <p className="about-line">{aboutData.description}</p>
            </div>

            <div className="image-slider">
                {aboutData.image.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`Slide ${index}`}
                        className={`slider-image ${index === currentImageIndex ? "active" : ""}`}
                    />
                ))}
            </div>

            <div className="experience">
                <h3>Experience</h3>
                {aboutData.experience.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h4>{exp.company}</h4>
                        <p><strong>Role:</strong> {exp.role}</p>
                        <p><strong>Duration:</strong> {exp.duration}</p>
                    </div>
                ))}
            </div>

            <div className="hobbies">
                <h3>Hobbies</h3>
                <ul>
                    {aboutData.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;
