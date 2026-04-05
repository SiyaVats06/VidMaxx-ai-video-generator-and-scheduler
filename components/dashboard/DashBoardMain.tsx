"use client";
import { Show, useAuth, UserButton, useUser } from "@clerk/nextjs";
import React from "react";

const DashBoardMain = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      {/* Header */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
        {/* Left – page title */}
        <div>
          <h1 className="text-[16px] font-semibold text-zinc-900 leading-tight">
            Dashboard
          </h1>
          <p className="text-[13px] text-zinc-500">
            Welcome back, {user?.firstName} 👋
          </p>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2.5">
          {/* Search */}
          {/* <div className="relative hidden sm:flex items-center">
              <Search className="absolute left-3 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                className="h-8 w-44 pl-8 pr-3 text-[12.5px] bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-300 placeholder:text-zinc-400 transition-all focus:w-56"
              />
            </div> */}

          {/* Notifications */}

          {/* User profile dropdown */}
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </header>
      {/* ── Page Content ─────────────────────────────────────────── */}
      {children}
    </div>
  );
};

export default DashBoardMain;
