'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);





  return (
    <div className="relative group w-full  h-[400px] overflow-hidden rounded-lg bg-black shadow-2xl aspect-video">
      <video
        poster="/assets/videoreferance.png"
        className="w-full h-full object-cover cursor-pointer"
        />

      {/* Center Play/Pause Overlay Button */}
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 cursor-pointer ${
          isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
      >
        <button className="p-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-transform transform hover:scale-110">
          {isPlaying ? <Pause size={36} /> : <Play size={36} className="translate-x-0.5" />}
        </button>
      </div>

    </div>
  );
}