"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Video,
  BookOpen,
  CreditCard,
  Settings,
  Zap,
  User,
  Plus,
  ChevronRight,
} from "lucide-react";
import { clsx } from "clsx";

const navItems = [
  {
    label: "Series",
    href: "/dashboard/series",
    icon: LayoutGrid,
  },
  {
    label: "Videos",
    href: "/dashboard/videos",
    icon: Video,
  },
  {
    label: "Guides",
    href: "/dashboard/guides",
    icon: BookOpen,
  },
  {
    label: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className="dashboard-sidebar">
      {/* ── Sidebar Header ── */}
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-logo-wrapper">
            <Image
              src="/logo.png"
              alt="VidMaxx Logo"
              width={34}
              height={34}
              className="sidebar-logo"
              priority
            />
          </div>
          <span className="sidebar-app-name">VidMaxx</span>
        </div>
      </div>

      {/* ── Create Button ── */}
      <div className="sidebar-create-btn-wrapper">
        <button className="sidebar-create-btn" id="create-series-btn">
          <Plus size={15} strokeWidth={2.5} />
          <span>Create new series</span>
        </button>
      </div>

      {/* ── Navigation ── */}
      <nav className="sidebar-nav">
        <p className="sidebar-nav-label">Menu</p>
        <ul className="sidebar-nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const isHovered = hoveredItem === item.label;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  id={`nav-${item.label.toLowerCase()}`}
                  className={clsx("sidebar-nav-item", {
                    "sidebar-nav-item--active": isActive,
                    "sidebar-nav-item--hover": !isActive && isHovered,
                  })}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span
                    className={clsx("sidebar-nav-icon-wrapper", {
                      "sidebar-nav-icon-wrapper--active": isActive,
                    })}
                  >
                    <Icon
                      size={16}
                      strokeWidth={isActive ? 2.2 : 1.8}
                      className={clsx("sidebar-nav-icon", {
                        "sidebar-nav-icon--active": isActive,
                      })}
                    />
                  </span>
                  <span className="sidebar-nav-text">{item.label}</span>
                  {isActive && (
                    <ChevronRight
                      size={13}
                      className="sidebar-nav-chevron"
                      strokeWidth={2}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ── Sidebar Footer ── */}
      <div className="sidebar-footer">
        {/* Upgrade Card */}
        <div className="sidebar-upgrade-card" id="upgrade-card">
          <div className="sidebar-upgrade-icon-ring">
            <Zap size={14} className="sidebar-upgrade-icon" />
          </div>
          <div className="sidebar-upgrade-text">
            <p className="sidebar-upgrade-title">Upgrade to Pro</p>
            <p className="sidebar-upgrade-sub">Unlock all AI features</p>
          </div>
          <button className="sidebar-upgrade-btn" id="upgrade-btn">
            Upgrade
          </button>
        </div>

        {/* Profile Setting */}
        <Link
          href="/dashboard/settings/profile"
          id="nav-profile-settings"
          className="sidebar-profile-link"
        >
          <div className="sidebar-profile-avatar">
            <User size={14} strokeWidth={2} className="sidebar-profile-user-icon" />
          </div>
          <div className="sidebar-profile-info">
            <p className="sidebar-profile-name">My Profile</p>
            <p className="sidebar-profile-sub">Account settings</p>
          </div>
          <ChevronRight size={13} className="sidebar-profile-chevron" strokeWidth={2} />
        </Link>
      </div>
    </aside>
  );
}
