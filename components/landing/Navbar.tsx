"use client";

import Link from "next/link";
import { Video, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Show,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userId } = useAuth();
  console.log("userID in Navbar", userId);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Video className="w-8 h-8 text-indigo-500" />

            <Link
              href="/"
              className="text-zinc-300 hover:text-white transition-colors text-xl font-bold tracking-tight"
            >
              VidMaxx
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
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
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-8  px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <Link href="/dashboard">
                <button className="bg-[#6c47ff] text-white rounded-md font-medium text-sm sm:text-base h-8  px-4 sm:px-5 cursor-pointer">
                  Dashboard
                </button>
              </Link>
              <UserButton />
            </Show>
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
