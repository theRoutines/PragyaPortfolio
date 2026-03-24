import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';
import CircularText from './CircularText';

const Hero = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger text entrance
      gsap.from(".hero-text-item", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });

      // Profile image entrance
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.8
      });

      // Slow floating animation for image
      gsap.to(imageRef.current, {
        y: 15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-sand-dune section-padding relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pine-teal/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pale-oak/50 rounded-full blur-3xl" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="hero-text-item text-pine-teal/80 text-xl md:text-2xl font-medium tracking-tight">
              Hello, I'm
            </h2>
            <h1 className="hero-text-item text-6xl md:text-8xl font-bold text-pine-teal tracking-tighter leading-none">
              ANIKET <br /> SHUKLA
            </h1>
          </div>
          
          <p className="hero-text-item text-lg md:text-xl text-pine-teal/70 max-w-xl leading-relaxed">
            A passionate Full Stack Developer dedicated to building premium digital experiences that combine innovative design with robust engineering.
          </p>

          <div className="hero-text-item flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="/AniketShuklaCVFinal.pdf" 
              download
              className="btn-primary flex items-center gap-2 group"
            >
              <FileText size={20} className="group-hover:rotate-12 transition-transform" />
              Download Resume
            </a>
            
            <div className="flex items-center gap-3">
              {[
                { icon: <Github size={24} />, href: "https://github.com/theRoutines" },
                { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/aniketshuklacse" },
                { icon: <Mail size={24} />, href: "mailto:aniketshukla933@gmail.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-pine-teal/20 flex items-center justify-center text-pine-teal hover:bg-pine-teal hover:text-sand-dune transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center items-center">
  <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">

    {/* 🔥 Circular Text (POSITIONED AROUND IMAGE) */}
    <div className="absolute inset-0 flex items-center justify-center scale-[3.4]">
      <CircularText
        text="SOFTWARE ENGINEER ✦ FULL STACK DEVELOPER ✦ PROBLEM SOLVER ✦ "
        onHover="speedUp"
        spinDuration={35}
      />
    </div>

    {/* 🖼️ Image */}
    <div 
      ref={imageRef}
      className="relative w-full h-full"
    >
      {/* Frame */}
      <div className="absolute inset-0 border-2 border-pine-teal/10 rounded-[3rem] rotate-6 translate-x-4 translate-y-4" />
      
      <div className="absolute inset-0 bg-pale-oak rounded-[3rem] shadow-4xl shadow-white overflow-hidden ">
        <img 
          src="/avatar.png" 
          alt="Aniket Shukla" 
          className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>

  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;
