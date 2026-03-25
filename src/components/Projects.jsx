import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Github, ExternalLink, Calendar, ArrowRight, ArrowLeft } from "lucide-react";

/* 🎨 Tech Colors */
const techColors = {
  React: "bg-blue-100 text-blue-600",
  Node: "bg-green-100 text-green-600",
  Mapbox: "bg-purple-100 text-purple-600",
  PostgreSQL: "bg-indigo-100 text-indigo-600",
  Tailwind: "bg-cyan-100 text-cyan-600",
  Java: "bg-white text-red-600",
  DoublyLinkedList: "bg-cyan-800 text-cyan-600",
  HashMap: "bg-cyan-100 text-cyan-600",
};

/* 📦 Project Data */
const projectData = [
  {
    name: "Sawaari",
    problem:
      "Urban commuting lacks real-time coordination, efficient route matching, and transparent pricing.",
    solution:
      "Built a scalable ride-sharing platform with live tracking, dynamic pricing, and optimized driver allocation.",
    tech: ["React", "Node", "Mapbox", "PostgreSQL"],
    image: "/SawaariLogo.png",
    date: "2024",
    github: "https://github.com/theRoutines/Sawaari.git",
    live: "https://sawaari-nine.vercel.app/",
  },
  {
    name: "LRU Cache",
    problem:
      "Understanding cache eviction strategies is difficult due to lack of visualization.",
    solution:
      "Developed an interactive visualizer with real-time animations to demonstrate LRU operations step-by-step.",
    tech: ["Java", "Doubly LinkedList", "HashMap"],
    image: "/LRUlogo.png",
    date: "2023",
    github: "https://github.com/theRoutines/LRU-Cache-Visualizer.git",
    live: "#",
  },
  {
    name: "Notes Pro",
    problem:
      "Users struggle with organizing and syncing notes efficiently across devices.",
    solution:
      "Created a collaborative note-taking app with markdown support and real-time cloud sync.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    image: "/NotesLogo.png",
    date: "2024",
    github: "https://github.com/theRoutines/ChromeExtension.git",
    live: "#",
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

      gsap.to(card, {
        x: offset * 190,
        scale: offset === 0 ? 1 : 0.85,
        opacity: offset === 0 ? 1 : 0.5,
        filter: offset === 0 ? "blur(0px)" : "blur(6px)",
        zIndex: 10 - Math.abs(offset),
        duration: 0.8,
        ease: "power3.out",
      });
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
    <section className="min-h-screen flex flex-col items-center justify-center bg-sand-dune relative overflow-hidden">
      <h2 className="text-5xl md:text-7xl font-bold text-pine-teal tracking-tight">
              Project Demonstration
            </h2>

            <div className="w-[30%] h-1 bg-pine-teal rounded-full mb-20" />
      
      <div className="relative w-full max-w-7xl h-[60vh] flex items-center justify-center">

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
                <div className="space-y-5">

                  <div className="flex items-center gap-2 text-pine-teal/40 text-xs uppercase tracking-widest">
                    <Calendar size={16} />
                    {project.date}
                  </div>

                  <h2 className="text-4xl md:text-6xl font-bold text-pine-teal">
                    {project.name}
                  </h2>

                  {/* PROBLEM */}
                  <p className="text-sm text-red-500 font-semibold">
                    Problem
                  </p>
                  <p className="text-pine-teal/90 text-base leading-relaxed">
                    {project.problem}
                  </p>

                  {/* SOLUTION */}
                  <p className="text-sm text-green-600 font-semibold">
                    Solution
                  </p>
                  <p className="text-pine-teal/90 text-base leading-relaxed">
                    {project.solution}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 pt-2">
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

                {/* BUTTONS */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full 
                    bg-pine-teal text-sand-dune font-semibold 
                    hover:scale-105 transition"
                  >
                    <Github size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full 
                    border border-pine-teal text-pine-teal 
                    hover:bg-pine-teal hover:text-sand-dune 
                    transition"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </div>

              {/* RIGHT (FIXED IMAGE) */}
              <div className="flex items-center justify-center p-10 rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-w-full max-h-full object-contain 
                  group-hover:scale-105 transition duration-500 mb-21"
                />
              </div>

            </div>
          </div>
        ))}

        {/* NAV */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-6 pointer-events-none">

          <button
            onClick={prevProject}
            className="pointer-events-auto w-14 h-14 rounded-full border border-pine-teal/20 
            flex items-center justify-center text-pine-teal 
            hover:bg-pine-teal hover:text-sand-dune transition"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={nextProject}
            className="pointer-events-auto w-14 h-14 rounded-full bg-pine-teal text-sand-dune 
            flex items-center justify-center shadow-lg transition"
          >
            <ArrowRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Projects;