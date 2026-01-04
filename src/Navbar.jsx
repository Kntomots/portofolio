import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on click
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Konstantinos Ntomotsidis</h2>
      <div className={`links ${isOpen ? "active" : ""}`}>
        <a href="#hero" onClick={(e) => scrollToSection(e, "hero")}>Home</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>Projects</a>
        <a href="#Timeline" onClick={(e) => scrollToSection(e, "timeline")}>Journey</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
