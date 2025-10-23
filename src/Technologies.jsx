import React from "react";
import "./Technologies.css";

const skills = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    category: "Salesforce / Cloud",
    items: ["Apex", "Salesforce"],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="technologies">
      <h2>Technologies & Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h3>{skill.category}</h3>
            <div className="skill-items">
              {skill.items.map((item, idx) => (
                <span key={idx} className="skill-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
