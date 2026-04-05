"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CaptionStyleProps {
  text: string;
  className?: string;
  // This prop will be useful later when integrating with Remotion to sync animation
  isPlaying?: boolean; 
}

// 1. Youtuber: Yellow text with thick black border and simple bounce
export const YoutuberCaption: React.FC<CaptionStyleProps> = ({ text, className = "" }) => {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap justify-center gap-2 font-black uppercase text-4xl tracker-tight ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: i * 0.2, // sequential popping
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="text-yellow-400 [text-shadow:-3px_-3px_0_#000,3px_-3px_0_#000,-3px_3px_0_#000,3px_3px_0_#000,4px_4px_0_rgba(0,0,0,0.5)]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// 2. Karaoke: Text that fills with color as if singing along
export const KaraokeCaption: React.FC<CaptionStyleProps> = ({ text, className = "" }) => {
  return (
    <div className={`flex justify-center text-4xl font-bold ${className}`}>
      <motion.div
        initial={{ backgroundPosition: "100% 0" }}
        animate={{ backgroundPosition: "0% 0" }}
        transition={{
          duration: text.length * 0.1,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="bg-clip-text text-transparent bg-linear-to-r from-red-500 via-red-500 to-gray-400 bg-size-[200%_100%] leading-tight"
        style={{ WebkitBackgroundClip: "text" }}
      >
        {text}
      </motion.div>
    </div>
  );
};

// 3. Neon: Glowing neon sign effect
export const NeonCaption: React.FC<CaptionStyleProps> = ({ text, className = "" }) => {
  return (
    <div className={`flex justify-center font-bold text-4xl italic ${className}`}>
      <motion.div
        initial={{ opacity: 0.8, textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff" }}
        animate={{ 
          opacity: [0.8, 1, 0.8, 0.9, 1],
          textShadow: [
            "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
            "0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff",
            "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
            "0 0 15px #0ff, 0 0 30px #0ff, 0 0 50px #0ff",
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-cyan-100"
      >
        {text}
      </motion.div>
    </div>
  );
};

// 4. Typewriter: Characters appear one by one
export const TypewriterCaption: React.FC<CaptionStyleProps> = ({ text, className = "" }) => {
  const chars = text.split("");
  return (
    <div className={`flex justify-center text-3xl font-mono text-green-400 bg-gray-900 px-4 py-2 rounded shadow-inner ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block w-3 h-8 bg-green-400"
      />
    </div>
  );
};

// 5. Pop: Words rapidly scale up with bright colors
export const PopCaption: React.FC<CaptionStyleProps> = ({ text, className = "" }) => {
  const words = text.split(" ");
  const colors = ["text-pink-500", "text-purple-500", "text-indigo-500", "text-blue-500"];
  
  return (
    <div className={`flex flex-wrap justify-center gap-3 font-extrabold text-5xl uppercase tracking-widest ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: [0, 1.2, 1], rotate: 0 }}
          transition={{
            duration: 0.4,
            delay: i * 0.3,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className={`${colors[i % colors.length]} drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// 6. Minimalist: Clean, smooth fade in with slight blur
export const MinimalistCaption: React.FC<CaptionStyleProps> = ({ text, className = "" }) => {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap justify-center gap-2 font-medium text-4xl text-white ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.4,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
          className="drop-shadow-md"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// A helper dictionary to map style ID to component
export const captionStyleComponents: Record<string, React.FC<CaptionStyleProps>> = {
  youtuber: YoutuberCaption,
  karaoke: KaraokeCaption,
  neon: NeonCaption,
  typewriter: TypewriterCaption,
  pop: PopCaption,
  minimalist: MinimalistCaption,
};
