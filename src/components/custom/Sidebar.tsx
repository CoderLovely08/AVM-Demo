import React from 'react';
import { homeIcon, pieIcon, tilesIcon } from '../../data';


const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-24 bg-background flex flex-col items-center py-8 gap-8">
      <div className="flex flex-col items-center justify-center h-full gap-8 mt-20">
        <button className="flex flex-col items-center gap-2 opacity-100 hover:opacity-80 transition-opacity">
          <img src={homeIcon} alt="Home" className="w-6 h-6" />
          <span className="text-xs text-primary">Home</span>
        </button>

        <button className="flex flex-col items-center gap-2 opacity-60 hover:opacity-80 transition-opacity">
          <img src={pieIcon} alt="Analyse" className="w-6 h-6" />
          <span className="text-xs text-white">Analyse</span>
        </button>

        <button className="flex flex-col items-center gap-2 opacity-60 hover:opacity-80 transition-opacity">
          <img src={tilesIcon} alt="Control" className="w-6 h-6" />
          <span className="text-xs text-white">Control</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
