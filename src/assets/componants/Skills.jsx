import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/Skills.css";
import skillsData from "../../api/skills.json"; // Direct import instead of fetch

const Skills = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        try {
            // Using directly imported data instead of fetch
            setSkills(skillsData);
            setLoading(false);
        } catch (err) {
            console.error("Error loading skills data:", err);
            setError("Failed to load skills data");
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div className="skills-loading">
                <div className="loading-spinner"></div>
                <p>Loading skills...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="skills-error">
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    if (!skills) {
        return <div className="skills-error">No skills data available</div>;
    }

    return (
        <motion.section
            className="skills-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="skills"
        >
            <motion.h1 
                className="skills-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {skills.title}
            </motion.h1>
            
            <div className="skills-list">
                {skills.skills.map((skill, index) => (
                    <motion.div
                        key={skill.name} // Better to use skill.name as key if unique
                        className="skill-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                        }}
                        whileHover={{ scale: 1.05 }}
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
                                    initial={{ strokeDashoffset: 251.2 }}
                                    animate={{ 
                                        strokeDashoffset: 251.2 - (251.2 * skill.percentage) / 100 
                                    }}
                                    transition={{ 
                                        duration: 1.5, 
                                        delay: index * 0.1,
                                        ease: "easeInOut" 
                                    }}
                                />
                                <text 
                                    x="50" 
                                    y="50" 
                                    textAnchor="middle" 
                                    dy="8" 
                                    className="percentage-text"
                                >
                                    {skill.percentage}%
                                </text>
                            </svg>
                        </div>
                        <motion.div 
                            className="skill-name"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                        >
                            {skill.name}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;