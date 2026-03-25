import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, School, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Lovely Professional University",
    score: "7.38 CGPA",
    location: "Phagwara, Punjab",
    duration: "2023 - 2027",
    description: "Specializing in software architecture and full-stack ecosystems. Actively involved in competitive coding and open-source contributions."
  },
  {
    degree: "Higher Secondary (XII)",
    school: "RPM Academy",
    score: "72%",
    location: "Gorakhpur, Uttar Pradesh",
    duration: "2021 - 2022",
    description: "Majored in Physics, Chemistry, and Mathematics. Developed strong logical foundations and early passion for programming."
  },
  {
    degree: "Secondary (X)",
    school: "RPM Academy",
    score: "84%",
    location: "Gorakhpur, UP",
    duration: "2019 - 2020",
    description: "Academic excellence across all disciplines, laying the groundwork for a career in engineering."
  }
];

const EducationItem = ({ item, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemRef.current, {
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
        filter: "blur(10px)",
        duration: 1.5,
        ease: "expo.out",
      });
    }, itemRef);
    return () => ctx.revert();
  }, [index]);

  return (
    <div 
      ref={itemRef}
      className={`relative flex flex-col md:flex-row items-center justify-between mb-24 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Node in the central line */}
      <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-pine-teal border-[6px] border-sand-dune z-20 hidden md:flex items-center justify-center shadow-lg transform hover:scale-125 transition-transform">
         <div className="w-2 h-2 bg-sand-dune rounded-full" />
      </div>
      
      {/* Spacer for the other side */}
      <div className="hidden md:block w-[42%]" />
      
      {/* Content Card */}
      <div className="w-full md:w-[48%] pl-12 md:pl-0">
        <div className="card group hover:border-pine-teal/30 transition-all duration-500 bg-white/40 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
             <GraduationCap size={150} />
          </div>

          <div className="flex items-center gap-3 text-pine-teal/80 font-black text-lg uppercase tracking-[0.3em] mb-6 font-bold">
            <Calendar size={25} />
            {item.duration}
          </div>
          
          <h3 className="text-3xl font-bold text-pine-teal mb-2 group-hover:text-dark-teal transition-colors tracking-tight leading-tight">
            {item.degree}
          </h3>
          <p className="text-pine-teal/90 font-bold mb-6 flex items-center gap-2 text-lg">
            <School size={25} className="text-pine-teal/40" />
            {item.school}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="px-5 py-2 bg-pine-teal text-sand-dune rounded-xl font-black text-lg flex items-center gap-2 shadow-lg shadow-pine-teal/20 font-bold">
              <CheckCircle2 size={22} />
              {item.score}
            </div>
            <div className="px-5 py-2 bg-white/60 border-2 border-pine-teal/5 rounded-xl text-pine-teal/90 font-bold text-sm flex items-center gap-2 uppercase tracking-widest">
              <MapPin size={20} />
              {item.location}
            </div>
          </div>

          <p className="text-pine-teal/80 text-base leading-relaxed border-t-2 border-pine-teal/5 pt-6 text-lg font-bold">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 }, 
        { 
          scaleY: 1, 
          transformOrigin: "top", 
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1.5,
            invalidateOnRefresh: true,
          }
        }
      );
      
      // Global refresh after some delay to ensure everything is rendered
      setTimeout(() => ScrollTrigger.refresh(), 500);
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="education" className="bg-pale-oak section-padding relative overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute top-20 left-0 w-full text-center opacity-[0.03] select-none pointer-events-none">
         <h2 className="text-[25vw] font-black tracking-tighter uppercase leading-none">Learning</h2>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-32 space-y-6">
          <div className="inline-block px-4 py-1 bg-pine-teal/5 rounded-full text-pine-teal text-xs font-black uppercase tracking-[0.3em] mb-2">
            Academics
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-pine-teal tracking-tighter">
            Educational Journey
          </h2>
          <div className="w-40 h-1.5 bg-pine-teal mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical central line */}
          <div 
            ref={lineRef}
            className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1.5 bg-pine-teal/10 rounded-full" 
          />
          
          <div className="flex flex-col">
            {educationData.map((item, idx) => (
              <EducationItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
