"use client";

import React from "react";
import Link from "next/link";
import { Video, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Video className="w-8 h-8 text-indigo-500" />
            <span className="text-white font-bold text-xl tracking-tight">
              VidMaxx
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-zinc-300 hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="#platforms"
              className="text-zinc-300 hover:text-white transition-colors text-sm font-medium"
            >
              Platforms
            </Link>
            <Link
              href="#pricing"
              className="text-zinc-300 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-zinc-300 hover:text-white transition-colors text-sm font-medium"
            >
              Log in
            </Link>

            <button className="bg-white text-black hover:bg-zinc-200 transition-colors px-4 py-2 rounded-full text-sm font-medium">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#features"
                className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </Link>
              <Link
                href="#platforms"
                className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Platforms
              </Link>
              <Link
                href="#pricing"
                className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </Link>
              <hr className="border-white/10 my-2" />
              <Link
                href="/login"
                className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Log in
              </Link>
              <button className="w-full text-left bg-white text-black hover:bg-zinc-200 block px-3 py-2 rounded-md text-base font-medium mt-2">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
