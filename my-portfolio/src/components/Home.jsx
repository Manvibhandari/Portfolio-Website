import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Topbar from "./Topbar";
import SidebarMenu from "./SidebarMenu";
import AboutMe from "./AboutMe";
import ScrollProgressBar from "./ScrollProgressBar";
import Experience from "./Experience";
import Projects from "./Projects";  
import Footer from "./Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);
  const closePanel = () => setIsOpen(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1800);
    const contentTimer = setTimeout(() => setShowMainContent(true), 2100);
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (!showMainContent) {
      html.classList.add("lock-scroll");
      body.classList.add("lock-scroll");
    } else {
      html.classList.remove("lock-scroll");
      body.classList.remove("lock-scroll");
    }
  }, [showMainContent]);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const letters = "MANVI".split("");

  // Smooth scroll on anchor clicks
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = anchor.getAttribute("href").replace("#", "");
        const target = document.getElementById(id);
        if (target) {
          setIsOpen(false);
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white font-sans overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="space3.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      <style>{`
        body, * { cursor: none !important; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        html, body { scroll-behavior: smooth; }
      `}</style>

      {/* INTRO ANIMATION */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 1.5, duration: 0.3 } }}
          >
            <div className="flex bebas text-[16vw] font-bold leading-none gap-[0.02em]">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="overflow-hidden mx-[0.01em]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 40,
                    transition: { delay: 0.9 + i * 0.2, duration: 0.5 },
                  }}
                  transition={{ delay: i * 0.15, duration: 0.4, ease: "easeOut" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      {showMainContent && (
        <div className="relative z-20 overflow-y-auto max-h-screen">
          {/* BLUR BACKGROUND WHEN SIDEBAR OPEN */}
          <div
            className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-30 transition-opacity duration-300 ${
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={closePanel}
          />

          <Topbar isOpen={isOpen} togglePanel={togglePanel} />

          {/* SIDEBAR MENU */}
          {isOpen && (
            <div className="fixed top-0 right-0 h-full w-full sm:w-1/3 bg-zinc-900 text-white z-40 shadow-lg transition-transform duration-300 ease-in-out p-6 flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row justify-between gap-6 mt-10">
                <div>
                  <h3 className="text-lg text-gray-400 mb-3 ml-14 mt-15">SOCIAL</h3>
                  <ul className="space-y-3 ml-14 text-lg">
                    <li><a href="https://github.com/Manvibhandari" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/manvi-bhandari-680439258/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">LinkedIn</a></li>
                    <li><a href="https://unstop.com/u/Manvibhandari" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Unstop</a></li>
                    <li><a href="https://oldversion.example.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Old Version</a></li>
                  </ul>
                </div>
                <SidebarMenu closePanel={closePanel} />
              </div>
              <div className="mb-16 ml-14">
                <h3 className="text-sm text-gray-400 mb-1 mt-6">GET IN TOUCH</h3>
                <p className="text-sm text-white opacity-80">manvibhandari05@gmail.com</p>
              </div>
            </div>
          )}

          {/* EMAIL SIDE LABEL */}
          <div className={`fixed -left-10 md:-left-20 top-1/2 -translate-y-1/2 rotate-[-90deg] text-sm tracking-widest z-10 font-bold transition duration-200 cursor-pointer ${
            isOpen ? "text-gray-300 blur-sm hover:text-white" : "text-gray-400 hover:text-white"
          }`}>
            manvibhandari05@gmail.com
          </div>

          {/* HERO SECTION */}
          <motion.section
            id="home"
            className="flex flex-col justify-center items-start min-h-screen px-8 md:px-24 pb-32 transition duration-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mt-30">
              <h1 className="text-5xl md:text-7xl font-anton font-black tracking-tight leading-none text-green-500 drop-shadow-md">FRONTEND</h1>
              <h1 className="text-5xl md:text-7xl font-anton font-black tracking-tight text-white mb-6 drop-shadow-md ml-6">DEVELOPER</h1>
              <p className="text-base md:text-lg max-w-xl text-white opacity-90 leading-relaxed drop-shadow">
                Hi! I'm <span className="font-semibold">Manvi</span>. A creative Frontend Developer with one year of experience in building high-performance, scalable, and responsive web solutions.
              </p>
              <button className="mt-6 w-fit px-6 py-3 bg-green-500 hover:bg-white hover:text-black text-black font-bold rounded shadow-lg transition">
                HIRE ME
              </button>
            </div>

            {/* EXPERIENCE STATS ON RIGHT */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right space-y-8 z-20 text-lg transition duration-300">
              <div>
                <div className="text-4xl font-bold text-green-500">1+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500">7+</div>
                <div className="text-sm">Completed Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500">10K+</div>
                <div className="text-sm">Hours Worked</div>
              </div>
            </div>
          </motion.section>

          {/* SPACER */}
          <div className="h-24" />

          {/* OTHER SECTIONS */}
          <AboutMe />
          <Experience />
          <Projects />
          <Footer />
        </div>
      )}

      {/* CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-green-500 rounded-full z-[9999] pointer-events-none"
        style={{ translateX: mouseX, translateY: mouseY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-green-400 rounded-full z-[9998] pointer-events-none"
        style={{ translateX: springX, translateY: springY }}
      />
    </div>
  );
}

export default Home;
