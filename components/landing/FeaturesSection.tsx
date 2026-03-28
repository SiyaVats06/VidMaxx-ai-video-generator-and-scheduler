"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, CalendarClock, PlaySquare, Camera, Mail, TrendingUp, Layers } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="w-6 h-6 text-indigo-400" />,
    title: "AI Video Generation",
    description: "Transform text and ideas into stunning, high-retention short videos in seconds using our advanced AI engine.",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  },
  {
    icon: <CalendarClock className="w-6 h-6 text-pink-400" />,
    title: "Smart Auto-Scheduling",
    description: "Set your content calendar on autopilot. Schedule weeks or months of content mapped perfectly to peak engagement times.",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    title: "Viral Hook Intelligence",
    description: "Our AI generates 3-second hooks optimized for the specific algorithm of each platform to maximize watch time.",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  }
];

const platforms = [
  { name: "YouTube", icon: <PlaySquare className="w-8 h-8" />, color: "hover:text-red-500 hover:border-red-500" },
  { name: "Instagram", icon: <Camera className="w-8 h-8" />, color: "hover:text-pink-500 hover:border-pink-500" },
  { name: "TikTok", icon: <Layers className="w-8 h-8" />, color: "hover:text-cyan-400 hover:border-cyan-400" },
  { name: "Email", icon: <Mail className="w-8 h-8" />, color: "hover:text-blue-400 hover:border-blue-400" }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything you need to <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">dominate short-form.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            VidMaxx replaces your editing team, scriptwriter, and social media manager in one unified dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-zinc-900 transition-colors"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${feature.bg} ${feature.border} border mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Platforms Section within Features */}
        <div id="platforms" className="mt-32 border-t border-white/10 pt-20">
          <div className="text-center mb-12">
             <h3 className="text-2xl font-semibold text-white mb-4">Publish Anywhere Automatically</h3>
             <p className="text-zinc-400">One video rendered in multiple precise formats targeted for each major network.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {platforms.map((platform) => (
              <motion.div
                key={platform.name}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center gap-3 w-32 h-32 justify-center rounded-2xl border border-white/10 bg-zinc-900/40 text-zinc-500 cursor-pointer transition-all duration-300 ${platform.color}`}
              >
                 {platform.icon}
                 <span className="font-medium text-sm">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
