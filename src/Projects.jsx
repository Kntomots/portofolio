import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import modules from correct path
import { Navigation } from "swiper/modules";

// import styles
import "swiper/css";
import "swiper/css/navigation";

import Card from "./Card";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-doc",
    description:
      "The E-doc platform connects doctors and patients. Both can create accounts, log in, and access the platform with different permissions based on their roles.",
    image: "../e-doc.png",
    githubUrl: "https://github.com/NickTsonis/e-doc",
  },
  {
    id: 2,
    title: "Votesphere",
    description:
      "With Votespere, users can compare political parties' positions and examine electoral trends over time.",
    image: "../votesphere.png",
    githubUrl: "https://github.com/Kntomots/europe-voteshere",
  },
  {
    id: 3,
    title: "Another Project",
    description: "A sample project to test responsive card layout.",
    image: "../sample.png",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "More Projects",
    description: "Another placeholder project.",
    image: "../sample.png",
    githubUrl: "#",
  },
];

export default function ProjectsSwiper() {
  return (
    <section id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Swipe or use arrows to see my projects.</p>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={5}
        breakpoints={{
          320: { slidesPerView: 1 },   // mobile
          640: { slidesPerView: 2 },   // tablet
          1024: { slidesPerView: 3 },  // desktop
        }}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.id}>
            <Card
              title={p.title}
              description={p.description}
              image={p.image}
              githubUrl={p.githubUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
