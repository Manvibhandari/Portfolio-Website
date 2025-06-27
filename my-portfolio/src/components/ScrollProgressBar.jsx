// src/components/ScrollProgressBar.jsx
import React, { useEffect, useState } from "react";

export default function ScrollProgressBar({ active }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (!active) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed top-0 right-2 h-full w-2 bg-[#1f1f1f] z-[100] rounded-full overflow-hidden">
      <div
        className="w-full bg-green-500 transition-all duration-100"
        style={{ height: `${scroll}%` }}
      />
    </div>
  );
}
