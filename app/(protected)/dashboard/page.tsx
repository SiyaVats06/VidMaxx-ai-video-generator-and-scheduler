"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  Video,
  BookOpen,
  CreditCard,
  Settings,
  Plus,
  Zap,
  Bell,
  ChevronDown,
  TrendingUp,
  Eye,
  PlayCircle,
  Users,
  Search,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ── Types ──────────────────────────────────────────────────────────────
type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
};

type StatCard = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ElementType;
  accent: string;
};

type RecentVideo = {
  title: string;
  series: string;
  views: string;
  status: "Published" | "Draft" | "Processing";
  thumb: string;
};

// ── Constants ──────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { id: "series", label: "Series", icon: LayoutGrid },
  { id: "videos", label: "Videos", icon: Video, badge: "12" },
  { id: "guides", label: "Guides", icon: BookOpen },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "settings", label: "Settings", icon: Settings },
];

const STATS: StatCard[] = [
  {
    label: "Total Views",
    value: "128.4K",
    change: "+12.5%",
    positive: true,
    icon: Eye,
    accent: "bg-sky-50 text-sky-600",
  },
  {
    label: "Watch Time",
    value: "3,241 hrs",
    change: "+8.1%",
    positive: true,
    icon: PlayCircle,
    accent: "bg-violet-50 text-violet-600",
  },
  {
    label: "Subscribers",
    value: "9,872",
    change: "+5.3%",
    positive: true,
    icon: Users,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Revenue",
    value: "$4,230",
    change: "-2.4%",
    positive: false,
    icon: TrendingUp,
    accent: "bg-amber-50 text-amber-600",
  },
];

const RECENT_VIDEOS: RecentVideo[] = [
  {
    title: "Next.js 15 Full Course",
    series: "Web Dev Mastery",
    views: "24.1K",
    status: "Published",
    thumb: "NX",
  },
  {
    title: "React Server Components Deep Dive",
    series: "Web Dev Mastery",
    views: "18.6K",
    status: "Published",
    thumb: "RC",
  },
  {
    title: "Tailwind CSS Advanced Patterns",
    series: "Design Systems",
    views: "—",
    status: "Draft",
    thumb: "TW",
  },
  {
    title: "Supabase Auth from Scratch",
    series: "Backend Essentials",
    views: "—",
    status: "Processing",
    thumb: "SB",
  },
];

const STATUS_STYLES: Record<RecentVideo["status"], string> = {
  Published: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Draft: "bg-zinc-100 text-zinc-500 border-zinc-200",
  Processing: "bg-amber-50 text-amber-700 border-amber-200",
};

const THUMB_COLORS: Record<string, string> = {
  NX: "bg-sky-100 text-sky-700",
  RC: "bg-violet-100 text-violet-700",
  TW: "bg-cyan-100 text-cyan-700",
  SB: "bg-emerald-100 text-emerald-700",
};

// ── Component ──────────────────────────────────────────────────────────
export default function Dashboard() {
  const [activeNav, setActiveNav] = useState<string>("series");

  return (
    <div className="flex h-screen bg-[#F7F8FA] font-sans overflow-hidden">
      {/* ── Sidebar ──────────────────────────────────────────────────── */}
      <aside className="w-[228px] shrink-0 flex flex-col bg-white border-r border-zinc-100 shadow-[1px_0_0_0_#f0f0f0]">
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 h-16 border-b border-zinc-100">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-zinc-100">
            <Image
              src="/user-logo.png"
              alt="VidMaxx logo"
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback if image missing
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Fallback gradient icon */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center">
              <Video className="w-4 h-4 text-white" />
            </div>
          </div>
          <span className="text-[17px] font-bold tracking-tight text-zinc-900">
            VidMaxx
          </span>
        </div>

        {/* Create Button */}
        <div className="px-3.5 pt-4 pb-2">
          <Button className="w-full h-9 bg-zinc-900 hover:bg-zinc-800 text-white text-[13px] font-medium rounded-lg gap-1.5 shadow-sm transition-all">
            <Plus className="w-3.5 h-3.5" />
            Create New Series
          </Button>
        </div>

        {/* Nav label */}
        <p className="px-5 pt-3 pb-1 text-[10.5px] font-semibold tracking-widest uppercase text-zinc-400">
          Menu
        </p>

        {/* Nav Items */}
        <nav className="flex-1 px-2.5 space-y-0.5">
          {NAV_ITEMS.map(({ id, label, icon: Icon, badge }) => {
            const isActive = activeNav === id;
            return (
              <button
                key={id}
                onClick={() => setActiveNav(id)}
                className={cn(
                  "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all group",
                  isActive
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800",
                )}
              >
                <Icon
                  className={cn(
                    "w-[17px] h-[17px] shrink-0 transition-colors",
                    isActive
                      ? "text-white"
                      : "text-zinc-400 group-hover:text-zinc-600",
                  )}
                />
                <span className="flex-1 text-left">{label}</span>
                {badge && (
                  <span
                    className={cn(
                      "text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[20px] text-center",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-zinc-100 text-zinc-500",
                    )}
                  >
                    {badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="px-2.5 pb-4 space-y-1 border-t border-zinc-100 pt-3">
          {/* Upgrade Card */}
          <div className="mx-0.5 mb-2 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-3.5 text-white shadow-md">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[12px] font-bold tracking-wide">
                Upgrade to Pro
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 mb-2.5 leading-snug">
              Unlock analytics, custom domains & more.
            </p>
            <Button
              size="sm"
              className="w-full h-7 bg-white text-zinc-900 hover:bg-zinc-100 text-[11.5px] font-semibold rounded-md"
            >
              Upgrade Plan
            </Button>
          </div>

          {/* Profile */}
          <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-zinc-50 transition-all group">
            <Avatar className="w-7 h-7 shrink-0">
              <AvatarImage src="/user-logo.png" alt="User" />
              <AvatarFallback className="bg-rose-100 text-rose-600 text-[11px] font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left min-w-0">
              <p className="text-[12.5px] font-semibold text-zinc-800 truncate">
                John Doe
              </p>
              <p className="text-[11px] text-zinc-400 truncate">
                john@vidmaxx.io
              </p>
            </div>
            <Settings className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 shrink-0" />
          </button>
        </div>
      </aside>

      {/* ── Main ─────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-zinc-100 flex items-center justify-between px-6 shrink-0 shadow-[0_1px_0_0_#f0f0f0]">
          {/* Left – page title */}
          <div>
            <h1 className="text-[15px] font-bold text-zinc-900 leading-tight">
              Dashboard
            </h1>
            <p className="text-[12px] text-zinc-400">Welcome back, John 👋</p>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2.5">
            {/* Search */}
            <div className="relative hidden sm:flex items-center">
              <Search className="absolute left-3 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                className="h-8 w-44 pl-8 pr-3 text-[12.5px] bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-300 placeholder:text-zinc-400 transition-all focus:w-56"
              />
            </div>

            {/* Notifications */}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-zinc-200 text-zinc-500 hover:text-zinc-800 relative"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
            </Button>

            {/* User profile dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-8 pl-1.5 pr-2.5 gap-2 border-zinc-200 hover:bg-zinc-50 text-zinc-700 rounded-lg"
                >
                  <Avatar className="w-5 h-5">
                    <AvatarImage src="/user-logo.png" alt="User" />
                    <AvatarFallback className="bg-rose-100 text-rose-600 text-[9px] font-bold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-[12.5px] font-medium hidden sm:inline">
                    John Doe
                  </span>
                  <ChevronDown className="w-3 h-3 text-zinc-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 text-[13px]">
                <DropdownMenuLabel className="text-[12px] text-zinc-500">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-rose-600">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* ── Page Content ─────────────────────────────────────────── */}
        <main className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {STATS.map(
              ({ label, value, change, positive, icon: Icon, accent }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-zinc-100 p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] font-medium text-zinc-500">
                      {label}
                    </span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center",
                        accent,
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-[22px] font-bold text-zinc-900 tracking-tight">
                    {value}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowUpRight
                      className={cn(
                        "w-3 h-3",
                        positive
                          ? "text-emerald-500"
                          : "text-rose-500 rotate-90",
                      )}
                    />
                    <span
                      className={cn(
                        "text-[11.5px] font-semibold",
                        positive ? "text-emerald-600" : "text-rose-500",
                      )}
                    >
                      {change}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      vs last month
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Recent Videos */}
          <div className="bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
              <div>
                <h2 className="text-[14px] font-bold text-zinc-900">
                  Recent Videos
                </h2>
                <p className="text-[12px] text-zinc-400 mt-0.5">
                  Your latest uploaded content
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-[12px] border-zinc-200 text-zinc-600 hover:text-zinc-900 gap-1.5"
              >
                View All
                <ArrowUpRight className="w-3 h-3" />
              </Button>
            </div>

            <div className="divide-y divide-zinc-50">
              {RECENT_VIDEOS.map((video, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 px-5 py-3.5 hover:bg-zinc-50/60 transition-colors group"
                >
                  {/* Thumbnail */}
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center text-[11px] font-bold shrink-0",
                      THUMB_COLORS[video.thumb] ?? "bg-zinc-100 text-zinc-600",
                    )}
                  >
                    {video.thumb}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-zinc-800 truncate leading-tight">
                      {video.title}
                    </p>
                    <p className="text-[11.5px] text-zinc-400 truncate mt-0.5">
                      {video.series}
                    </p>
                  </div>

                  {/* Views */}
                  <div className="hidden sm:flex items-center gap-1 text-zinc-500 mr-4">
                    <Eye className="w-3.5 h-3.5 text-zinc-300" />
                    <span className="text-[12px] font-medium">
                      {video.views}
                    </span>
                  </div>

                  {/* Status */}
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-[11px] font-medium px-2 py-0.5 rounded-md",
                      STATUS_STYLES[video.status],
                    )}
                  >
                    {video.status}
                  </Badge>

                  {/* More */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-700"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Upload a Video",
                desc: "Add content to an existing series",
                icon: Video,
                color: "bg-sky-50 text-sky-600 border-sky-100",
              },
              {
                label: "Create a Guide",
                desc: "Write step-by-step tutorial content",
                icon: BookOpen,
                color: "bg-violet-50 text-violet-600 border-violet-100",
              },
              {
                label: "New Series",
                desc: "Organise videos into a collection",
                icon: LayoutGrid,
                color: "bg-emerald-50 text-emerald-600 border-emerald-100",
              },
            ].map(({ label, desc, icon: Icon, color }) => (
              <button
                key={label}
                className="flex items-start gap-3.5 bg-white border border-zinc-100 rounded-xl p-4 text-left hover:shadow-md hover:border-zinc-200 transition-all group"
              >
                <div
                  className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border",
                    color,
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-zinc-800 group-hover:text-zinc-900">
                    {label}
                  </p>
                  <p className="text-[12px] text-zinc-400 mt-0.5 leading-snug">
                    {desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
