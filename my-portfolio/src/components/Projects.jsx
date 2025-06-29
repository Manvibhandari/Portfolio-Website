import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbAsterisk } from "react-icons/tb";

import Img1 from "../assets/Lum.jpg";
import Img2 from "../assets/todo.png";
import Img3 from "../assets/convert.png";
import Img4 from "../assets/text.png";
import Img6 from "../assets/theme.png";
import Img5 from "../assets/calculator.png";
import Img7 from "../assets/bgchange.png";

const projects = [
  {
    id: "01",
    title: "Student Management portal",
    tech: ["React.js", "Tailwind CSS", "HTML5"],
    image: Img1,
  },
  {
    id: "02",
    title: "Todo List Application",
    tech: ["Javascript", "HTML", "CSS"],
    image: Img2,
  },
  {
    id: "03",
    title: "Currency Converter",
    link: "#",
    tech: ["Javascript", "HTML", "CSS"],
    image: Img3,
  },
  {
    id: "04",
    title: "Password Generator",
    tech: ["Javascript", "HTML", "CSS"],
    image: Img4,
  },
  {
    id: "05",
    title: "Calculator",
    tech: ["Javascript", "HTML", "CSS"],
    image: Img5,
  },
  {
    id: "06",
    title: "Theme Switcher",
    tech: ["Javascript", "HTML", "CSS"],
    image: Img6,
  },
  {
    id: "07",
    title: "Background Color Changer",
    tech: ["Javascript", "HTML", "CSS"],
    image: Img7,
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className="w-full min-h-screen text-white px-6 md:px-12 pb-24 scroll-mt-[100px] bg-transparent overflow-x-hidden mt-[100px]"
    >
      <div className="max-w-7xl mx-auto ml-10 relative">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-12 mt-[50px]">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <TbAsterisk className="text-gray-400 text-xl md:text-2xl lg:text-3xl" />
          </motion.span>
          <h1 className="text-[14px] md:text-[22px] lg:text-[24px] font-anton text-white">
            SELECTED PROJECTS
          </h1>
        </div>

        {/* Project List */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transition-all duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "opacity-30"
                  : "opacity-100"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Title + Number */}
              <div className="flex items-baseline gap-6">
                <span className="text-gray-500 text-lg md:text-xl lg:text-2xl font-semibold">
                  .{project.id}
                </span>
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl md:text-3xl lg:text-4xl font-anton font-extrabold tracking-tight transition-colors duration-300 ${
                    hoveredIndex === index ? "text-green-500" : "text-gray-200"
                  }`}
                >
                  {project.title}
                </a>
              </div>

              {/* Tech Stack */}
              <div className="flex gap-6 mt-2 text-sm text-gray-400">
                {project.tech?.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              {/* Hover Image */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.img
                    key="preview"
                    src={project.image}
                    alt="preview"
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute ${
                      index === projects.length - 1
                        ? "bottom-0"
                        : "top-1/2 -translate-y-1/2"
                    } left-[560px] w-[360px] max-h-[450px] object-contain rounded-xl shadow-xl hidden md:block z-30`}
                  />
                )}
              </AnimatePresence>

              {/* Divider */}
              {index !== projects.length - 1 && (
                <div className="border-b border-gray-700 mt-6 pt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
