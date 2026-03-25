import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, ShieldCheck } from "lucide-react";

const certifications = [
  { name: "Summer Training", logo: "/certificates/lpulogo.png", image: "/certificates/SummerTraining.jpeg", issuer: "Lovely Professional University" },
  { name: "IBM Full Stack Developer", logo: "/certificates/ibmlogo.png", image: "/certificates/OS.png", issuer: "IBM" },
  { name: "Infosys Cert", logo: "/certificates/infosyslogo.png", image: "/certificates/BuildGenai.png", issuer: "Infosys" },
  { name: "HackerRank Problem Solving", logo: "/certificates/hackerranklogo.png", image: "/certificates/ProblemSolving.png", issuer: "HackerRank" },
  { name: "Computer Networks", logo: "/certificates/GoogleLogo.png", image: "/certificates/BitsBytes.png", issuer: "Google" },
  { name: "Cloud Computing", logo: "/certificates/nptellogo.png", image: "/certificates/nptel.png", issuer: "NPTEL" },
];

// 🔥 Animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="bg-pale-oak section-padding min-h-screen relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pine-teal/5 blur-[120px] rounded-full" />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pine-teal/5 rounded-md text-pine-teal text-xs font-bold uppercase tracking-widest">
              <ShieldCheck size={14} />
              Verified
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-pine-teal tracking-tight">
              Certifications
            </h2>

            <div className="w-32 h-1 bg-pine-teal rounded-full" />
          </div>

          <p className="text-pine-teal/60 italic max-w-sm text-lg">
            A testament to continuous learning and technical excellence.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -10 }}
              className="group cursor-pointer flex flex-col items-center text-center p-8 
              bg-white/60 backdrop-blur-md border border-pine-teal/10 rounded-3xl 
              hover:shadow-xl transition"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Logo */}
              <div className="w-50 h-50 mb-6 relative">
                <div className="absolute inset-0  rounded-2xl" />
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  onError={(e) => (e.target.style.display = "none")}
                  className="w-full h-full object-contain p-4 relative z-10"
                />
              </div>

              <h3 className="text-xl font-bold text-pine-teal mb-2">
                {cert.name}
              </h3>

              <p className="text-pine-teal/50 text-xs uppercase tracking-wider">
                {cert.issuer}
              </p>

              <div className="mt-4 flex items-center gap-2 text-pine-teal text-sm opacity-0 group-hover:opacity-100 transition">
                View <ExternalLink size={14} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Award className="text-pine-teal" />
                  <div>
                    <h4 className="text-xl font-bold text-pine-teal">
                      {selectedCert.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                <button onClick={() => setSelectedCert(null)}>
                  <X />
                </button>
              </div>

              {/* Image */}
              <div className="p-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  onError={(e) => (e.target.style.display = "none")}
                  className="w-full rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;