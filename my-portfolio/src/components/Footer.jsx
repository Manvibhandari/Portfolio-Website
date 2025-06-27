import React from "react";
import { Star, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white mt-72 px-6 md:px-12 py-20 relative overflow-hidden">
      {/* Floating email on the left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left text-sm tracking-widest text-gray-400">
        manvibhandari05@gmail.com
      </div>

      {/* Main footer content */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">Have a project in mind?</p>

        <a
          href="mailto:tasmirolislam@gmail.com"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight hover:text-green-400 transition-all duration-300"
        >
          manvibhandari05@gmail.com
        </a>

        <div className="text-gray-500 mt-8 text-sm flex justify-center items-center gap-4">
          <span>Design & built by Manvi Bhandari</span>
          <div className="flex items-center gap-2">
            <Star size={16} /> <span>68</span>
            <Share2 size={16} /> <span>16</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
