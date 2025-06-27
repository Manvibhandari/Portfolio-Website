import React from "react";
import { ArrowUpRight } from "lucide-react";

// Menu items with labels, colors, and section IDs
const menuItems = [
  { name: "Home", color: "bg-yellow-400", href: "#home" },
  { name: "About Me", color: "bg-blue-500", href: "#about" },
  { name: "Experience", color: "bg-emerald-400", href: "#experience" },
  { name: "Projects", color: "bg-purple-500", href: "#projects" }, // ✅ Added Projects
];

function SidebarMenu({ closePanel }) {
  const handleClick = (href) => {
    closePanel(); // Close the sidebar
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200); // Delay allows sidebar animation to complete
  };

  return (
    <div>
      <h3 className="text-lg text-gray-400 mb-2 mt-16">MENU</h3>
      <ul className="space-y-3 mr-8 text-lg">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleClick(item.href)}
              className="flex items-center gap-3 group text-white transition-colors duration-200"
            >
              {/* Dot + Hover Arrow Effect */}
              <span className="relative w-4 h-4 flex items-center justify-center">
                <span
                  className={`w-3 h-3 rounded-full ${item.color} transition-transform duration-200 group-hover:scale-0`}
                />
                <ArrowUpRight
                  className="absolute w-4 h-4 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </span>

              {/* Menu Text with Hover Color */}
              <span className="transition-colors duration-200 group-hover:text-green-400">
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
