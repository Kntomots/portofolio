import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./carousel.css";

const projects = [
  {
    id: 1,
    title: "E-doc",
    description:
      "The E-doc platform connects doctors and patients. Both can create accounts, log in, and access the platform with different permissions based on their roles. The platform also includes a history section and a scheduling feature to help doctors and patients manage and organize their appointments with each other.",
    image: "../e-doc.png",
    githubUrl:"https://github.com/NickTsonis/e-doc"
  },
  {
    id: 2,
    title: "Votesphere",
    description:
      "With Votespere, users can easily compare the positions of political parties on various issues, examine electoral trends across different time periods, and gather important insights into changes in the political landscape. The app aims to enhance political awareness and participation by providing a tool that is both easy to use and powerful in data analysis. This technological approach enables a better understanding of electoral processes and outcomes, offering a significant contribution to political analysis and democratic engagement.",
    image: "../votesphere.png",
    githubUrl:"https://github.com/Kntomots/europe-voteshere"
  },
  {
    id: 3,
    title: "Another Project",
    description: "A sample project to test overflow behavior.",
    image: "../sample.png",
    githubUrl:"#"
  }
];

export default function Carousel() {
  const containerRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  // Check if cards overflow
  const checkOverflow = () => {
    if (containerRef.current) {
      const { scrollWidth, clientWidth } = containerRef.current;
      setShowArrows(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 320; // card width
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects">
      <div className="carousel-header">
        <h2>My Projects</h2>
        <p>Here are some of my recent projects. Resize screen to see arrows.</p>
      </div>

      <div className="carousel-wrapper">
        {showArrows && (
          <button className="arrow left" onClick={() => scroll("left")}>
            ❮
          </button>
        )}

        <div className="carousel" ref={containerRef}>
          {projects.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              description={p.description}
              image={p.image}
              githubUrl={p.githubUrl}
            />
          ))}
        </div>

        {showArrows && (
          <button className="arrow right" onClick={() => scroll("right")}>
            ❯
          </button>
        )}
      </div>
    </section>
  );
}
