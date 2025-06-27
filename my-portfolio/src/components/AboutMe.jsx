import React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaSass,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiVite,
} from "react-icons/si";
import { TbAsterisk } from "react-icons/tb";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen text-white px-6 md:px-12 pt-2 pb-24 scroll-mt-[100px] bg-transparent"
    >
      <div className="max-w-7xl mx-auto ml-10">
        {/* Main Statement */}
        <p className="text-[40px] md:text-[50px] lg:text-[56px] font-light leading-snug tracking-tight text-white">
          I believe in a user-centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
        </p>

        {/* "This is me." and Divider Line */}
        <div className="mt-20">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">This is me.</p>
          <hr className="border-gray-600 mb-8" />

          <div className="flex flex-col md:flex-row justify-between gap-8 md:items-start">
            <h2 className="text-5xl font-anton text-white whitespace-nowrap min-w-[180px]">
              Hi, I'm Manvi.
            </h2>
            <div className="text-gray-400 max-w-2xl leading-relaxed text-base md:text-lg space-y-4">
              <p>
                I'm a frontend web developer dedicated to turning ideas into creative solutions.
                I specialize in creating seamless and intuitive user experiences.
              </p>
              <p>
                My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
              </p>
            </div>
          </div>
        </div>

        {/* STACK SECTION */}
        <div className="mt-60">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* LEFT SIDE: Icon + Headings */}
            <div className="flex flex-col space-y-2 mt-[-40px]">
              <div className="flex items-center gap-2">
                {/* Rotating gray icon */}
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                >
                  <TbAsterisk className="text-gray-400 text-xl md:text-2xl lg:text-3xl" />
                </motion.span>
                <h1 className="text-[12px] md:text-[18px] lg:text-[18px] font-anton text-white">
                  MY STACK
                </h1>
              </div>
              <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-anton text-gray-400 tracking-wider">
                FRONTEND
              </h2>
            </div>

            {/* RIGHT SIDE: Icon Grid */}
            <div className="pr-8 md:pr-20 lg:pr-28 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-6 text-white text-left">
              {/* Gap between icon & label reduced using gap-2 and smaller text */}
              <div className="flex items-center gap-2 text-base">
                <FaHtml5 className="text-orange-500 text-4xl md:text-5xl" /> HTML5
              </div>
              <div className="flex items-center gap-2 text-base">
                <FaCss3Alt className="text-blue-500 text-4xl md:text-5xl" /> CSS3
              </div>
              <div className="flex items-center gap-2 text-base">
                <FaJs className="text-yellow-400 text-4xl md:text-5xl" /> JavaScript
              </div>
              <div className="flex items-center gap-2 text-base">
                <FaReact className="text-cyan-400 text-4xl md:text-5xl" /> React
              </div>
              <div className="flex items-center gap-2 text-base">
                <SiRedux className="text-purple-500 text-4xl md:text-5xl" /> Redux
              </div>
              <div className="flex items-center gap-2 text-base">
                <SiTailwindcss className="text-sky-400 text-4xl md:text-5xl" /> Tailwind CSS
              </div>
              <div className="flex items-center gap-2 text-base">
                <SiFramer className="text-violet-400 text-4xl md:text-5xl" /> Framer Motion
              </div>
              <div className="flex items-center gap-2 text-base">
                <SiVite className="text-purple-400 text-4xl md:text-5xl" /> Vite
              </div>
              <div className="flex items-center gap-2 text-base">
                <FaGitAlt className="text-orange-500 text-4xl md:text-5xl" /> Git
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
