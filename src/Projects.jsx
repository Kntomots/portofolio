import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import modules from correct path
import { Navigation } from "swiper/modules";

// import styles
import "swiper/css";
import "swiper/css/navigation";

import Card from "./Card";
import "./Projects.css";

// Import project images
import edocImage from "./assets/e-doc.png";
import votesphereImage from "./assets/votesphere.png";
import ajgameImage from "./assets/AjGame.png";

const projects = [
  {
    id: 1,
    title: "E-doc",
    description:
      "The E-doc platform connects doctors and patients. Both can create accounts, log in, and access the platform with different permissions based on their roles.",
    image: edocImage,
    githubUrl: "https://github.com/NickTsonis/e-doc",
  },
  {
    id: 2,
    title: "Votesphere",
    description:
      "With Votespere, users can compare political parties' positions and examine electoral trends over time.",
    image: votesphereImage,
    githubUrl: "https://github.com/Kntomots/europe-voteshere",
  },
  {
    id: 3,
    title: "Aj Game",
    description: "A 2D game where the player controls a character to avoid obstacles and collect points.It is build with unity engine.",
    image: ajgameImage,
    githubUrl: "https://github.com/Kntomots/AjGame",
  },
  {
    id: 4,
    title: "TCP/IP Messaging Application",
    description: "Java networking application with multi-threaded server and Swing GUI client enabling real-time messaging between users. Demonstrates socket programming, concurrent thread management, and desktop UI design.",
    image: "",
    githubUrl: "https://github.com/Kntomots/Message-Application",
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
