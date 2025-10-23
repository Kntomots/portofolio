import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const milestones = [
 {
  year: "2018",
  title: "Started Learning Web Development & Preparing for Panhellenic Exams",
  description: "Explored HTML, CSS, and JavaScript through personal projects and online courses, while preparing for the Panhellenic Exams to enter university."
},
{
  year: "2019",
  title: "Began Computer Science at Aristotle University of Thessaloniki",
  description: "Enrolled to pursue my passion for programming, algorithms, and software development."
},
{
  year: "2021",
  title: "Trained in Problem-Solving & Algorithms at HackerRank",
  description: "Enhanced coding skills in JavaScript, Python, C, and C++, while preparing for coding interviews."
},
{
  year: "2023",
  title: "Joined Deloitte as a Salesforce Developer",
  description: "Worked on real-world projects, enhancing Salesforce and cloud development skills, and earned two Salesforce certifications (PDI & JDI)."
},
{
  year: "2024",
  title: "Served in Greek Special Forces (9 months)",
  description: "Developed discipline, resilience, and leadership skills essential for success."
}
];

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    containerRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      containerRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section id="timeline" className="timeline">
      <h2>My Journey</h2>
      <div className="timeline-container">
        {milestones.map((m, i) => (
          <div
            key={i}
            className={`timeline-item ${visibleItems.includes(i) ? "visible" : ""} ${i % 2 === 0 ? "left" : "right"}`}
            ref={(el) => (containerRef.current[i] = el)}
            data-index={i}
          >
            <span className="year">{m.year}</span>
            <h3>{m.title}</h3>
            <p>{m.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
