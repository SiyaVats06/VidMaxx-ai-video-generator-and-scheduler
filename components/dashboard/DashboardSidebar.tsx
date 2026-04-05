"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Video,
  BookOpen,
  CreditCard,
  Settings,
  Zap,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUser } from "@clerk/nextjs";

type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  href: string;
};

// ── Constants ──────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { id: "series", label: "Series", icon: LayoutGrid, href: "/dashboard" },
  { id: "videos", label: "Videos", icon: Video, badge: "12", href: "/dashboard/videos" },
  { id: "guides", label: "Guides", icon: BookOpen, href: "/dashboard/guides" },
  { id: "billing", label: "Billing", icon: CreditCard, href: "/dashboard/billing" },
  { id: "settings", label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  const { user } = useUser();
  const [activeNav, setActiveNav] = useState<string>("series");

  return (
    <aside className="w-[228px] shrink-0 z-100 flex flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-gray-200">
        <div className="flex items-center gap-2 w-full">
          <div className="bg-indigo-600 text-white rounded-md p-1.5 flex items-center justify-center">
            <Video className="w-5 h-5" />
          </div>
          <Link
            href="/"
            className="text-zinc-900 transition-colors text-xl font-bold tracking-tight"
          >
            VidMaxx
          </Link>
        </div>
      </div>

      {/* Create Button */}
      <Link href="/dashboard/create" className="px-3.5 pt-4 pb-2">
        <Button className="w-full h-10 flex justify-center items-center cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-[14px] font-medium rounded-lg gap-2 transition-all shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Create New Series</span>
        </Button>
      </Link>

      {/* Nav label */}
      <p className="px-5 pt-3 pb-2 text-[11px] font-semibold tracking-widest uppercase text-zinc-400">
        Menu
      </p>

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map(({ id, label, icon: Icon, badge, href }) => {
          const isActive = activeNav === id;
          return (
            <Link
              key={id}
              href={href}
              onClick={() => setActiveNav(id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-all group",
                isActive
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-zinc-600 hover:bg-gray-100 hover:text-zinc-900 font-medium",
              )}
            >
              <Icon
                className={cn(
                  "w-[18px] h-[18px] shrink-0 transition-colors",
                  isActive
                    ? "text-indigo-600"
                    : "text-zinc-400 group-hover:text-zinc-600",
                )}
              />
              <span className="flex-1 text-left">{label}</span>
              {badge && (
                <span
                  className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center",
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-gray-100 text-zinc-500 group-hover:bg-gray-200",
                  )}
                >
                  {badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="px-3 pb-4 space-y-2 border-t border-gray-200 pt-4">
        {/* Upgrade Card */}
        <div className="mb-3 rounded-xl bg-gradient-to-br from-orange-50 to-white p-4 shadow-sm border border-orange-100/50">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="text-[13px] font-bold tracking-wide text-gray-900">
              Upgrade Plan
            </span>
          </div>
          <p className="text-[12px] text-gray-600 mb-3 leading-snug">
            Unlock analytics, custom domains & more.
          </p>
          <Button className="w-full h-8 bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 text-[12px] font-semibold rounded-lg transition-colors shadow-sm">
            View Plans
          </Button>
        </div>

        {/* Profile */}
        <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 transition-all group border border-transparent">
          <Avatar className="w-8 h-8 shrink-0 border border-gray-200 shadow-sm">
            <AvatarImage src="/user-logo.png" alt="User" />
            <AvatarFallback className="bg-emerald-100 text-emerald-800 text-[12px] font-bold">
              {user?.firstName?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left min-w-0">
            <p className="text-[13px] font-semibold text-zinc-900 truncate">
              Profile Settings
            </p>
            <p className="text-[11px] text-zinc-500 truncate">
              {user?.emailAddresses[0]?.emailAddress || "Manage Account"}
            </p>
          </div>
          <Settings className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 shrink-0 transition-colors" />
        </button>
      </div>
    </aside>
  );
}
