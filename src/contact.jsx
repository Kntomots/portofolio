import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState(""); // success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwpqjkrg", { // <-- replace with your Formspree endpoint
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset(); // clear form fields
      } else {
        setStatus("❌ Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Have a project in mind or want to say hello? Fill the form below!</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {status && <p className="form-status">{status}</p>}
    </section>
  );
}

export default Contact;
