import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./contact";
import Footer from "./Footer";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Timeline from "./Timeline";
import "./App.css";

const TriangleBackground = () => {
  const triangles = Array.from({ length: 10 }); // adjust number
  return (
    <div className="triangle-background">
     {triangles.map((_, i) => (
  <img
    key={`triangle-${i}`}   // <-- unique key
    src="./kostas1.jpg"
    alt="triangle background"
  />
))}
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
  <TriangleBackground />
  <Navbar />  {/* Sticky now */}
  <main className="main-content">
    <Hero />
    <Projects/>
    <Timeline/>
    <Technologies />
    <Contact />
  </main>
  <Footer />
</div>
  );
}

export default App;
