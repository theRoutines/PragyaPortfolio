import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const IntroScene = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Initial state
    gsap.set([textRef.current, subtitleRef.current], { 
      opacity: 0, 
      y: 20, 
      filter: 'blur(10px)' 
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.5,
      ease: 'power3.out',
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8')
    .to(containerRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: 'power2.inOut',
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-sand-dune flex flex-col items-center justify-center cursor-pointer"
      onClick={onComplete}
    >
      <div className="text-center">
        <h1 
          ref={textRef}
          className="text-6xl md:text-8xl font-bold text-pine-teal tracking-tighter mb-4"
        >
          ANIKET SHUKLA
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-pine-teal/80 font-medium tracking-widest uppercase"
        >
          Full Stack Developer
        </p>
      </div>
      
      <div className="absolute bottom-10 text-pine-teal/40 text-sm animate-pulse">
        Click to skip
      </div>
    </div>
  );
};

export default IntroScene;
