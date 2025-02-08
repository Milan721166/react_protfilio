import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/Skills.css";

const Skills = () => {
    const [skillsData, setSkillsData] = useState(null);

    useEffect(() => {
        fetch("/api/skills.json")
            .then(response => response.json())
            .then(data => setSkillsData(data))
            .catch(error => console.error("Error fetching skills:", error));
    }, []);

    if (!skillsData) return <p>Loading...</p>;

    return (
        <motion.section
            className="skills-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <h1 className="skills-title">{skillsData.title}</h1>
            <div className="skills-list">
                {skillsData.skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                        <div className="circular-progress">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" className="bg-circle" />
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    className="progress-circle"
                                    strokeDasharray="251.2"
                                    strokeDashoffset="251.2"
                                    animate={{ strokeDashoffset: 251.2 - (251.2 * skill.percentage) / 100 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                                <text x="50" y="50" textAnchor="middle" dy="8" className="percentage-text">
                                    {skill.percentage}%
                                </text>
                            </svg>
                        </div>
                        <div className="skill-name">{skill.name}</div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
