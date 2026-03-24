// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "About", href: "#" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#works" },
//     { name: "Certifications", href: "#certifications" },
//     { name: "Education", href: "#education" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
//       <div className="container mx-auto px-6 md:px-12">
//         <div className={`flex items-center justify-between rounded-full bg-pale-oak/80 backdrop-blur-md px-6 md:px-10 py-3 border border-pine-teal/5 shadow-lg transition-all ${scrolled ? 'mx-0' : 'mx-4'}`}>
//           <a href="#" className="text-2xl font-black text-pine-teal tracking-tighter">
//             AS.
//           </a>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center gap-10">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name}
//                 href={link.href}
//                 className="text-sm font-bold text-pine-teal/60 hover:text-pine-teal uppercase tracking-widest transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a 
//               href="#contact"
//               className="px-6 py-2 bg-pine-teal text-sand-dune rounded-full text-sm font-bold hover:bg-dark-teal transition-all hover:scale-105 active:scale-95"
//             >
//               Let's Talk
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-pine-teal"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Nav Dropdown */}
//         <div className={`md:hidden absolute top-full left-0 w-full p-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
//           <div className="bg-pale-oak rounded-3xl border border-pine-teal/10 shadow-2xl p-8 flex flex-col gap-6 items-center">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name}
//                 href={link.href}
//                 className="text-xl font-bold text-pine-teal"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
