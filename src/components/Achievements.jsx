import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Target, Star, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ icon, value, label, prefix = "", suffix = "", delay = 0 }) => {
  const countRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      const targetValue = parseInt(value) || 0;

      // Count animation
      gsap.to(obj, {
        val: targetValue,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.innerText = prefix + Math.ceil(obj.val) + suffix;
          }
        }
      });

      // Card entrance
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 1,
        delay,
        ease: "expo.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        }
      });
    }, cardRef);

    return () => ctx.revert();
  }, [value, prefix, suffix, delay]);

  return (
    <div 
      ref={cardRef}
      className="card flex flex-col items-center justify-center p-12 bg-white/40 backdrop-blur-md border-2 border-pine-teal/5 hover:border-pine-teal/40 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-pine-teal/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="w-20 h-20 rounded-[2rem] bg-pine-teal/5 flex items-center justify-center text-pine-teal mb-8 group-hover:bg-pine-teal group-hover:text-sand-dune transition-all duration-700 group-hover:rotate-[360deg] shadow-lg shadow-pine-teal/5">
        {icon}
      </div>
      
      <h3 
        ref={countRef}
        className="text-6xl md:text-7xl font-bold text-pine-teal tracking-tighter mb-4"
      >
        0
      </h3>
      
      <p className="text-pine-teal/40 font-black uppercase tracking-[0.3em] text-xs">
        {label}
      </p>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="bg-sand-dune section-padding overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pine-teal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pale-oak/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 space-y-6">
          
          <h2 className="text-5xl md:text-7xl font-bold text-pine-teal tracking-tighter">
            Impact & Metrics
          </h2>
          <div className="w-40 h-1.5 bg-pine-teal mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 font-bold text-lg">
          <StatCard 
            icon={<Target size={36} />}
            value="200"
            suffix="+"
            label="Problems on LeetCode and GfG"
            delay={0.1}
          />
          <StatCard 
            icon={<Trophy size={36} />}
            value="1400"
            label="LeetCode Rating"
            delay={0.2}
          />
          <StatCard 
            icon={<Star size={36} />}
            value="2"
            suffix="★"
            label="CODECHEF STAR"
            delay={0.3}
            className = "font-bold text-lg"
          />
          <StatCard 
            icon={<Rocket size={36} />}
            prefix="Top "
            value="10"
            label="Hackathon Rank"
            delay={0.4}
          />
        </div>
        
        <div className="mt-24 p-12 border-4 border-dashed border-pine-teal/10 rounded-[4rem] bg-pale-oak/20 text-center max-w-5xl mx-auto backdrop-blur-sm group hover:border-pine-teal/30 transition-all duration-700">
          <p className="text-pine-teal/70 text-3xl md:text-4xl font-bold leading-tight italic tracking-tight">
            "Every problem I solve is a step towards building something that changes the way people interact with the digital world."
          </p>
          <div className="mt-8 w-12 h-1 bg-pine-teal/20 mx-auto rounded-full group-hover:w-24 transition-all duration-700" />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
