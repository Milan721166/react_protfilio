import React, { useEffect, useState } from "react";
import "../css/Home.css";
import aboutData from "../../api/data.json";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";

// Components
import Education from "./Education";
import Blog from "./Blog";
import MyProjects from "./MyProjects"; // ✅ Add your new component

const Home = () => {
  const [data, setData] = useState(aboutData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Role Switching Logic
  useEffect(() => {
    if (data?.roles) {
      const interval = setInterval(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % data.roles.length);
        setDisplayedText(""); // Reset text for new animation
        setCharIndex(0);
      }, 4000); // Switch roles every 4 seconds

      return () => clearInterval(interval);
    }
  }, [data]);

  // Letter-by-letter Typing Animation
  useEffect(() => {
    if (data?.roles) {
      const role = data.roles[currentRoleIndex];
      if (charIndex < role.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + role[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100); // Typing speed

        return () => clearTimeout(timer);
      }
    }
  }, [charIndex, data, currentRoleIndex]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!data) return <div className="error">No data available</div>;

  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <div className="profile-container">
            <img src={data.image} alt="Profile" className="profile-pic" />
            <div className="profile-text">
              <h3>{data.greeting}</h3>
              <h1>{data.name}</h1>
              <h3>
                And I'm a{" "}
                <span className="text">
                  {displayedText}
                  <span className={`cursor ${showCursor ? "visible" : "hidden"}`}>|</span>
                </span>
              </h3>
              <p>{data.description}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="home-sci">
            <a href={data.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <BiLogoFacebook size={30} />
            </a>
            <a href={data.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <BiLogoInstagram size={30} />
            </a>
            <a href={data.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <BiLogoGithub size={30} />
            </a>
            <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BiLogoLinkedin size={30} />
            </a>
          </div>

          <a href={data.socialLinks.linkedin} className="btn-box">
            More About Me
          </a>
        </div>
        <span className="home-imgHover"></span>
      </section>

      {/* Additional Components */}
      <Education />
      <MyProjects /> {/* ✅ Added here */}
      <Blog />
    </>
  );
};

export default Home;
