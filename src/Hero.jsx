import React from "react";
import "./Hero.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaDiscord } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa";
import kostas from "./assets/kostas.jpg";



function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="overlay">

      </div> {/* color overlay */}

      <div className="hero-content">


        <div className="hero-image">
          <img src={kostas} alt="my image" />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">Hello, I'm Konstantinos Ntomotsidis</h1>
          <p className="hero-subtitle">
            I'am a passionate software developer with a focus on creating innovative solutions. 
            I love coding and enjoy working on challenging projects that push the boundaries of technology. I have a strong background in web development,
             and I am always eager to learn new skills and technologies.
          </p>
           <div className="social-icons">
          <a href="https://www.instagram.com/k.ntomotsidhs/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/kostas-ntomotsidis-a9abb5283/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/kostas.ntomotsidis" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.hackerrank.com/profile/kostas_ntomotsi1" target="_blank" rel="noopener noreferrer">
            <SiHackerrank />
          </a>
        </div>
        </div>
     
        
      </div>
          <a href="#projects" className="scroll-down">
      </a>
      <div>
       
      </div>

    </section>
  );
}

export default Hero;
