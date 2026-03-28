"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CalendarClock, Wand2, Video } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black flex flex-col items-center justify-center min-h-[90vh]">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-900/40 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-900/30 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>VidMaxx AI Engine 2.0 is live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8"
        >
          Create & Schedule <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
            Viral AI Shorts
          </span>{" "}
          on Autopilot.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-zinc-400 mb-10"
        >
          Generate compelling short-form videos with AI and auto-schedule them to YouTube, Instagram, TikTok, and Email all from one intuitive dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <Wand2 className="w-5 h-5" />
            Generate My First Video
          </button>
          <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 px-8 py-4 rounded-full font-semibold text-lg transition-all">
            <CalendarClock className="w-5 h-5" />
            See How Scheduling Works
          </button>
        </motion.div>

        {/* Mockup / Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-2 shadow-2xl relative">
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10 rounded-2xl" />
            <img
              src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
              alt="VidMaxx Dashboard Preview"
              className="rounded-xl object-cover w-full h-[300px] md:h-[500px] opacity-60"
            />
            
            {/* Overlay UI elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-indigo-500/20 backdrop-blur-md flex items-center justify-center border border-indigo-500/50">
                <Video className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex gap-3 text-sm font-medium text-white shadow-xl">
                 <div className="flex items-center gap-2 text-indigo-400"><Sparkles className="w-4 h-4"/> Script generated</div>
                 <div className="w-px h-5 bg-white/20"/>
                 <div className="flex items-center gap-2 text-purple-400"><Video className="w-4 h-4"/> Rendering video... 78%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
