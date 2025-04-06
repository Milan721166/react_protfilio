import React from 'react';
import education from '../../api/education.json';
import '../css/Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">My Education</h2>
      <div className="education-container">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <h3 className="education-degree">{item.degree}</h3>
            <p className="education-field">{item.field}</p>
            <p className="education-institution">{item.institution}</p>
            <span className="education-year">{item.year}</span>
            {item.description && (
              <p className="education-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;