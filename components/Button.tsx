"use client"

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  mode?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const {
    variant = "primary", 
    mode = "light", 
    className, 
    children, 
    ...rest
  } = props;

  const isPrimary = variant == "primary";
  const isLight = mode == "light";

  return (
    <button
      className={`
        pt-4 pb-[14px] px-[26px]
        rounded-[24px]
        font-bold text-[15px] tracking-[-0.12px]
        disabled:cursor-not-allowed
        ${isPrimary 
          ? "text-link-water-white bg-dark-pink enabled:hover:bg-charm-pink disabled:opacity-50" 
          : `bg-transparent border-[1px] disabled:opacity-50
            ${isLight
              ? "text-link-water-white border-link-water-white enabled:hover:bg-link-water-white enabled:hover:text-mirage-blue"
              : "text-san-juan-blue border-san-juan-blue enabled:hover:bg-san-juan-blue enabled:hover:text-white"}
            `
        }
        ${className || ""}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}
