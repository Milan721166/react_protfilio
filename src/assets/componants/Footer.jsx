import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
            <div className="footer-links">
                <a href="https://github.com/yourgithubhttps://github.com/Milan721166" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/milan-sahoo-98a912312" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:milansahoo721166205@gmail.com">Email</a>
            </div>
        </footer>
    );
};

export default Footer;
