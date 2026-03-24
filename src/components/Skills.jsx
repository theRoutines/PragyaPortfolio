import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Box } from "lucide-react";

// 🔥 Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SkillCard = ({ title, icon, skills }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group relative p-6 rounded-3xl border border-pine-teal/10 
      bg-white/40 backdrop-blur-md transition-all duration-300 
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
      bg-gradient-to-br from-pine-teal/10 to-transparent transition duration-500" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 rounded-2xl bg-pine-teal/10 
          flex items-center justify-center text-pine-teal 
          group-hover:bg-pine-teal group-hover:text-sand-dune"
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl font-bold text-pine-teal tracking-tight">
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-1.5 bg-white border border-pine-teal/10 
            rounded-full text-sm font-semibold text-pine-teal/70 
            hover:bg-pine-teal hover:text-sand-dune 
            transition-all duration-300 shadow-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={26} />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
    },
    {
      title: "Frontend",
      icon: <Layout size={26} />,
      skills: ["React", "Next.js", "Tailwind", "GSAP", "Redux"],
    },
    {
      title: "Backend",
      icon: <Server size={26} />,
      skills: ["Node.js", "Express"],
    },
    {
      title: "Database",
      icon: <Database size={26} />,
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps",
      icon: <Box size={26} />,
      skills: ["AWS", "Vercel", "Firebase", "Netlify"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-pale-oak section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pine-teal rounded-full blur-2xl" />
        <div className="absolute top-1/2 -right-20 w-56 h-56 bg-pine-teal rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          

          <h2 className="text-5xl md:text-7xl font-bold text-pine-teal tracking-tighter">
            Core Expertise
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-pine-teal to-transparent mx-auto rounded-full" />

          <p className="text-pine-teal/80 max-w-2xl mx-auto text-lg italic font-bold ">
            "Design is not just what it looks like. Design is how it works."
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <SkillCard
              key={idx}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;