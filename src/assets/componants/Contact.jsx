import { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeGkeFurViAKgFZmBiFfbNHZ6HRND1yY6MoaoNI0LidBULkOg/formResponse";
    const ENTRY_NAME = "entry.1234567890";  // Replace with actual entry ID
    const ENTRY_EMAIL = "entry.2345678901"; // Replace with actual entry ID
    const ENTRY_MESSAGE = "entry.3456789012"; // Replace with actual entry ID

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append(ENTRY_NAME, formData.name);
        formDataToSend.append(ENTRY_EMAIL, formData.email);
        formDataToSend.append(ENTRY_MESSAGE, formData.message);

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: "POST",
                body: formDataToSend,
                mode: "no-cors", // Prevents CORS errors
            });

            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Error submitting the form. Try again!");
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required />
                <button type="submit">Send Message</button>
            </form>
            {status && <p className="status-message">{status}</p>}
        </div>
    );
};

export default Contact;
