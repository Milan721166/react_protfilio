import React, { useState, useEffect } from 'react';
import '../css/Blog.css';
import blogData from '../../api/blog.json';

const Blog = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="blog-container">
            <section className="publications-section">
                <h2 className="section-title">Latest Publications</h2>
                <div className={`publications-grid ${isMobile ? 'mobile-view' : ''}`}>
                    {blogData.publications.map((pub, index) => (
                        <article key={index} className="publication-card">
                            {pub.image && (
                                <div className="publication-image">
                                    <img 
                                        src={pub.image} 
                                        alt={pub.title} 
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = '/placeholder-image.jpg';
                                        }}
                                    />
                                </div>
                            )}
                            <div className="publication-content">
                                <header className="publication-header">
                                    <span className="publisher">{pub.publisher}</span>
                                    <time className="publication-date" dateTime={pub.date}>
                                        {new Date(pub.date).toLocaleDateString()}
                                    </time>
                                </header>
                                <h3 className="publication-title">{pub.title}</h3>
                                <p className="publication-description">{pub.description}</p>
                                <a href={pub.link} className="read-more-btn" aria-label={`Read ${pub.title}`}>
                                    Read Publication
                                    <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="achievements-section">
                <h2 className="section-title">Recent Achievements</h2>
                <div className={`achievements-list ${isMobile ? 'mobile-view' : ''}`}>
                    {blogData.achievements.map((achievement, index) => (
                        <article key={index} className="achievement-item">
                            {achievement.image && (
                                <div className="achievement-image">
                                    <img 
                                        src={achievement.image} 
                                        alt={achievement.title}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = '/placeholder-image.jpg';
                                        }}
                                    />
                                </div>
                            )}
                            <div className="achievement-content">
                                <header className="achievement-header">
                                    <span className="organization">{achievement.organization}</span>
                                    <time className="achievement-date" dateTime={achievement.date}>
                                        {new Date(achievement.date).toLocaleDateString()}
                                    </time>
                                </header>
                                <h3 className="achievement-title">{achievement.title}</h3>
                                <p className="achievement-description">{achievement.description}</p>
                                <a href={achievement.link} className="view-details-btn" aria-label={`View details of ${achievement.title}`}>
                                    View Details
                                    <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;