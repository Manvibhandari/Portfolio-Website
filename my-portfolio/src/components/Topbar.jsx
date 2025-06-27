import React from "react";

function Topbar({ isOpen, togglePanel }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <img
        src={isOpen ? "/menu3.png" : "/menu.png"}
        alt="Menu"
        className="w-8 h-8 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
        onClick={togglePanel}
      />
    </div>
  );
}

export default Topbar;
