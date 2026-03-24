import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Github, Calendar, ArrowRight, ArrowLeft } from "lucide-react";

/* 🎨 Tech Colors */
const techColors = {
  React: "bg-blue-100 text-blue-600",
  Node: "bg-green-100 text-green-600",
  Mapbox: "bg-purple-100 text-purple-600",
  PostgreSQL: "bg-indigo-100 text-indigo-600",
  TypeScript: "bg-blue-200 text-blue-800",
  D3: "bg-orange-100 text-orange-600",
  "Next.js": "bg-gray-200 text-gray-800",
  Supabase: "bg-emerald-100 text-emerald-600",
  Tailwind: "bg-cyan-100 text-cyan-600",
};

/* 📦 Project Data */
const projectData = [
  {
    name: "Sawaari",
    description:
"A comprehensive ride-sharing platform with real-time tracking, dynamic pricing, and secure payments. Built to handle scalable bookings with optimized route matching and live driver updates. Focused on delivering a seamless user experience with high performance and reliability under load.",
    tech: ["React", "Node", "Mapbox", "PostgreSQL"],
    image: "/SawaariLogo.png",
    date: "2024",
    link: "https://github.com/theRoutines/Sawaari.git",
  },
  {
    name: "LRU Cache",
    description:
"An interactive LRU cache visualizer designed to demonstrate cache eviction strategies through real-time animations. Helps users understand memory optimization concepts with clear hit/miss indicators and step-by-step transitions, making complex algorithms intuitive.",
    tech: ["React", "TypeScript", "D3"],
    image: "/LRUlogo.png",
    date: "2023",
    link: "https://github.com/theRoutines/LRU-Cache-Visualizer.git",
  },
  {
    name: "Notes Pro",
    description:
"An advanced note-taking application with markdown support, real-time collaboration, and cloud synchronization. Designed for productivity with a clean UI, fast performance, and seamless multi-device access, enabling users to organize and share ideas efficiently.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    image: "/NotesLogo.png",
    date: "2024",
    link: "https://github.com/theRoutines/ChromeExtension.git",
  },
];

const Projects = () => {
  const cardsRef = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    animateCards(active);
  }, [active]);

  const animateCards = (index) => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const offset = i - index;

      if (offset === 0) {
        gsap.to(card, {
          x: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          zIndex: 10,
          duration: 0.8,
          ease: "power3.out",
        });
      } else {
        gsap.to(card, {
          x: offset * 160,
          scale: 0.85,
          opacity: 0.5,
          filter: "blur(6px)",
          zIndex: 10 - Math.abs(offset),
          duration: 0.8,
          ease: "power3.out",
        });
      }
    });
  };

  const nextProject = () => {
    setActive((prev) => (prev + 1) % projectData.length);
  };

  const prevProject = () => {
    setActive((prev) =>
      prev === 0 ? projectData.length - 1 : prev - 1
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-sand-dune relative overflow-hidden">
      <div className="relative w-full max-w-6xl h-[75vh] flex items-center justify-center">

        {/* Cards */}
        {projectData.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="absolute w-[90%] md:w-[70%] h-full bg-pale-oak rounded-[3rem] 
            shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-pine-teal/10 
            overflow-hidden cursor-pointer group"
            onClick={nextProject}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

              {/* LEFT */}
              <div className="p-10 flex flex-col justify-between">
                <div className="space-y-6">

                  <div className="flex items-center gap-2 text-pine-teal/40 text-xs uppercase tracking-widest">
                    <Calendar size={16} />
                    {project.date}
                  </div>

                  <h2 className="text-4xl md:text-6xl font-bold text-pine-teal">
                    {project.name}
                  </h2>

                  <p className="text-pine-teal/60 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full font-medium 
                        ${techColors[t] || "bg-pine-teal/10 text-pine-teal"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 🚀 GITHUB BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full 
                  bg-pine-teal text-sand-dune font-semibold 
                  shadow-md hover:shadow-xl 
                  hover:scale-105 transition-all duration-300 group"
                >
                  <Github
                    size={18}
                    className="group-hover:rotate-12 group-hover:scale-110 transition-all"
                  />
                  View Code
                </a>
              </div>

              {/* RIGHT */}
              <div className="flex items-center justify-center p-10 bg-pine-teal/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr " />

                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain z-10 
                  group-hover:scale-110 transition duration-700"
                />
              </div>
            </div>
          </div>
        ))}

        {/* ⬅️➡️ NAVIGATION */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-6 pointer-events-none">

          {/* Prev */}
          <button
            onClick={prevProject}
            className="pointer-events-auto w-14 h-14 rounded-full border border-pine-teal/20 
            flex items-center justify-center text-pine-teal 
            hover:bg-pine-teal hover:text-sand-dune 
            backdrop-blur-md transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft />
          </button>

          {/* Next */}
          <button
            onClick={nextProject}
            className="pointer-events-auto w-14 h-14 rounded-full bg-pine-teal text-sand-dune 
            flex items-center justify-center shadow-lg 
            hover:scale-110 transition-all duration-300"
          >
            <ArrowRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Projects;