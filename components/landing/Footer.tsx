import React from 'react';
import Link from 'next/link';
import { Video, MessageSquare, Code, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <Video className="w-6 h-6 text-indigo-500" />
               <span className="text-white font-bold text-lg tracking-tight">VidMaxx</span>
             </div>
             <p className="text-zinc-400 text-sm mb-6">
               The ultimate AI short video generator and scheduler designed to put your content strategy on autopilot.
             </p>
             <div className="flex gap-4">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <Code className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <Briefcase className="w-5 h-5" />
                </a>
             </div>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Product</h4>
             <ul className="space-y-3">
               <li><Link href="#features" className="text-zinc-400 hover:text-white transition-colors text-sm">Features</Link></li>
               <li><Link href="#platforms" className="text-zinc-400 hover:text-white transition-colors text-sm">Platforms</Link></li>
               <li><Link href="#pricing" className="text-zinc-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
               <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Changelog</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Resources</h4>
             <ul className="space-y-3">
               <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Documentation</Link></li>
               <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">API Reference</Link></li>
               <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Community</Link></li>
               <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Blog</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Legal</h4>
             <ul className="space-y-3">
               <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
               <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
               <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Cookie Policy</Link></li>
             </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:text-left">
           <p className="text-zinc-500 text-sm">
             &copy; {new Date().getFullYear()} VidMaxx Inc. All rights reserved.
           </p>
           <p className="text-zinc-500 text-sm mt-2 md:mt-0 flex items-center justify-center gap-1">
              Made with <span className="text-red-500">♥</span> for creators
           </p>
        </div>
      </div>
    </footer>
  );
}
