import React from 'react'

interface DividerProps {
  className?: string;
  mode?: "light" | "dark" | null | undefined;
}

export default function Divider({className, mode}: DividerProps) {
  const isLight = mode == "light";
  const isDark = mode == "dark";

  return (
    <div className={`w-full h-[1px] ${isLight ? "bg-link-water-white" : isDark ? "" : ""} ${className || ""}`}>
      
    </div>
  )
}
