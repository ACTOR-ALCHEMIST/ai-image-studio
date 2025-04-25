"use client";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-20 w-full bg-white border-b border-gray-200 flex items-center h-16 px-4 md:px-8">
      {/* Hamburger for mobile */}
      <div className="md:hidden mr-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open sidebar"
          onClick={onMenuClick}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </Button>
      </div>
      {/* Breadcrumb/project */}
      <div className="flex items-center gap-2 font-medium text-gray-700">
        <span className="hidden md:inline">Unprofitable</span>
        <span className="hidden md:inline text-gray-400">/</span>
        <span className="hidden md:inline">Default project</span>
        <span className="md:hidden font-bold">Images</span>
      </div>
      <div className="flex-1" />
      {/* Right actions */}
      <nav className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Dashboard" className="hidden md:inline-flex">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </Button>
        <Button variant="ghost" size="icon" aria-label="Docs" className="hidden md:inline-flex">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="12" height="12" rx="2" />
          </svg>
        </Button>
        <Button variant="ghost" size="icon" aria-label="API Reference" className="hidden md:inline-flex">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 10h12M10 4v12" />
          </svg>
        </Button>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="10" cy="10" r="8" />
            <path d="M10 6v4l2 2" />
          </svg>
        </Button>
        <Avatar>
          {/* 可替换为用户头像 */}
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">J</div>
        </Avatar>
      </nav>
    </header>
  );
}
