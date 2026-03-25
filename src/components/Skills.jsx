import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

// 🔥 Grouped Skills (3 Columns)
const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#EA2D2E" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" }
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#444" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Vercel", icon: SiVercel, color: "#000" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-pale-oak px-8 py-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-bold text-pine-teal tracking-tight">
              Core Expertise
            </h2>

            <div className="w-32 h-1 bg-pine-teal rounded-full mb-20" />

        {/* 🔥 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {skillGroups.map((group, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* Title */}
              <h3 className="text-2xl font-bold text-pine-teal mb-6">
                {group.title}
              </h3>

              {/* Cards */}
              <div className="flex flex-col gap-4 w-full">
                {group.items.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.09 }}
                      className="flex items-center gap-3 
                      px-4 py-3 rounded-xl 
                      bg-sand-dune border border-pine-teal/10 
                      shadow-sm hover:shadow-md 
                      transition-all duration-50"
                    >
                      <Icon size={45} style={{ color: skill.color }} />
                      <span className="text-base font-semibold text-pine-teal">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;