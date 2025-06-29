import React from "react";
import { Star, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-white mt-40 px-6 md:px-12 py-20 relative z-10">
      {/* Main footer content */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-gray-400 text-lg">Have a project in mind?</p>

        <a
          href="mailto:manvibhandari05@gmail.com"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight hover:text-green-400 transition-all duration-300"
        >
          manvibhandari05@gmail.com
        </a>

        <div className="mt-8 text-sm flex flex-col items-center gap-2">
          <a
            href="https://github.com/Manvibhandari" 
            rel="noopener noreferrer"
            className="text-white font-medium hover:underline"
          >
            Design & built by Manvi Bhandari
          </a>
        </div>
      </div>
    </footer>
  );
}
