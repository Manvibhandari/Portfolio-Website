import React from "react";
import { motion } from "framer-motion";
import { TbAsterisk } from "react-icons/tb";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen text-white px-6 md:px-12 pb-24 mt-50 scroll-mt-[100px] bg-transparent"
    >
      <div className="max-w-7xl mx-auto ml-10">
        <div className="flex items-center gap-2 mb-12">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <TbAsterisk className="text-gray-400 text-xl md:text-2xl lg:text-3xl" />
          </motion.span>
          <h1 className="text-[12px] md:text-[18px] lg:text-[18px] font-anton text-white">
            MY EXPERIENCE
          </h1>
        </div>

        {/* Experience Entry */}
        <div className="flex flex-col space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-white">Luminaries</p>
            <h2 className="text-3xl md:text-5xl font-anton text-gray-100">
              Freelancer (Frontend Developer)
            </h2>
            <p className="text-sm text-gray-400">April 2025 – June 2025</p>

            {/* Contributions */}
            <div className="mt-4 space-y-2 text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
              <p className="font-semibold text-white">What I did:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed a fully responsive UI for a mental wellness startup using React.js and Tailwind CSS.</li>
                <li>Integrated smooth, engaging animations with Framer Motion to improve user interaction and experience.</li>
                <li>Worked closely with the backend developer to implement seamless API integrations.</li>
                <li>Successfully delivered the project within a tight 6-week deadline, ensuring quality and performance.</li>
              </ul>

              <p className="pt-3 font-semibold text-white">Tools & Technologies:</p>
              <ul className="flex flex-wrap gap-3 text-sm text-gray-400">
                <li className="bg-gray-800 px-3 py-1 rounded-full">React</li>
                <li className="bg-gray-800 px-3 py-1 rounded-full">Tailwind CSS</li>
                <li className="bg-gray-800 px-3 py-1 rounded-full">Framer Motion</li>
                <li className="bg-gray-800 px-3 py-1 rounded-full">Git</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
