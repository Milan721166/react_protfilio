import React, { useEffect, useState } from "react";
import "../css/Home.css";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";

const Home = () => {
  const [data, setData] = useState(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Fetch Data from JSON
  useEffect(() => {
    fetch("/api/data.json") // ✅ Corrected Path
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Role Switching Logic
  useEffect(() => {
    if (data && data.roles) {
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
    if (data && data.roles) {
      const role = data.roles[currentRoleIndex];
      if (charIndex < role.length) {
        setTimeout(() => {
          setDisplayedText((prev) => prev + role[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      }
    }
  }, [charIndex, data, currentRoleIndex]);

  return (
    <section className="home">
      <div className="home-content">
        <div className="profile-container">
          {data && <img src={data.image} alt="Profile" className="profile-pic" />}
          <div className="profile-text">
            <h3>{data ? data.greeting : "Loading..."}</h3>
            <h1>{data ? data.name : "Loading..."}</h1>
            <h3>
              And I'm a <span className="text">{displayedText}</span>
            </h3>
            <p>{data ? data.description : "Loading..."}</p>
          </div>
        </div>

        {/* Social Links */}
        {data && (
          <div className="home-sci">
            <a href={data.socialLinks.facebook} className="active" target="_blank" rel="noopener noreferrer">
              <BiLogoFacebook size={30} />
            </a>
            <a href={data.socialLinks.instagram} className="active" target="_blank" rel="noopener noreferrer">
              <BiLogoInstagram size={30} />
            </a>
            <a href={data.socialLinks.github} className="active" target="_blank" rel="noopener noreferrer">
              <BiLogoGithub size={30} />
            </a>
            <a href={data.socialLinks.linkedin} className="active" target="_blank" rel="noopener noreferrer">
              <BiLogoLinkedin size={30} />
            </a>
          </div>
        )}

        <a href={data?.socialLinks.linkedin} className="btn-box">
          More About Me
        </a>
      </div>
      <span className="home-imgHover"></span>
    </section>
  );
};

export default Home;
