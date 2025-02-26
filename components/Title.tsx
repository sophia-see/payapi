import React from 'react'

interface HeaderProps {
  text: string;
  className?: string;
}

export default function Title({text, className}: HeaderProps) {
  return (
    <div
      className={`
        serif 
        text-[24px] md:text-[32px]
        leading-[32px] md:leading-[40px]
        tracking-[-0.18px] md:tracking-[-0.25px]
        ${className || ""}
      `}
    >
      {text}
    </div>
  )
}
