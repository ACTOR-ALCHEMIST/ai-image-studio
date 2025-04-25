"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const menu = [
  { label: "Playground", icon: "🧪" },
  { label: "Prompts", icon: "💡" },
  { label: "Images", icon: "🖼️", active: true },
];

export default function Sidebar({
  collapsed = false,
  onCollapse,
}: {
  collapsed?: boolean;
  onCollapse?: () => void;
}) {
  return (
    <aside
      className={cn(
        "h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-200",
        collapsed ? "w-16" : "w-56"
      )}
      aria-label="Sidebar"
    >
      <div className="flex flex-col h-full">
        <div className={cn(
          "flex items-center h-10 border-b border-gray-100 transition-all duration-200 relative",
          collapsed ? "justify-center px-0" : "px-2"
        )}>
          {/* 折叠/展开按钮 */}
          <button
            className={cn(
              "text-gray-400 hover:text-gray-700 transition p-1 rounded absolute",
              "right-2 top-1/2 -translate-y-1/2"
            )}
            onClick={onCollapse}
            aria-label={collapsed ? "展开侧边栏" : "折叠侧边栏"}
            type="button"
            style={{ zIndex: 10 }}
          >
            {collapsed ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 4l6 6-6 6" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 4l-6 6 6 6" />
              </svg>
            )}
          </button>
        </div>
        <nav className="flex-1">
          <ul className="flex flex-col">
            {menu.map((item) => (
              <li key={item.label}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full flex items-center h-16 gap-3 rounded-none text-gray-700 text-base font-medium hover:bg-gray-100 transition-all duration-200",
                    collapsed ? "justify-center px-0" : "justify-start px-6",
                    item.active && "bg-gray-100 font-semibold"
                  )}
                >
                  <span className="text-xl">{item.icon}</span>
                  {!collapsed && item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
