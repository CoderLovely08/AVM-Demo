import React from 'react';
import { homeIcon, pieIcon, tilesIcon } from '../../data';


const Sidebar = () => {
  return (
    <div className="flex-1 bg-linear-to-b
        from-secondary/5
        via-black
        to-primary/20 w-24 bg-background flex flex-col items-center py-8 gap-8 rounded-lg">
      <div className="flex flex-col items-center justify-center h-full gap-8 mt-20">
        <button className="flex flex-col items-center gap-2 opacity-100 transition-opacity">
          <img src={homeIcon} alt="Home" className="w-6 h-6" />
          <span className="text-xs text-primary">Home</span>
        </button>

        <button className="flex flex-col items-center gap-2  transition-opacity">
          <img src={pieIcon} alt="Analyse" className="w-6 h-6" />
          <span className="text-xs text-white">Analyse</span>
        </button>

        <button className="flex flex-col items-center gap-2  transition-opacity">
          <img src={tilesIcon} alt="Control" className="w-6 h-6" />
          <span className="text-xs text-white">Control</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
