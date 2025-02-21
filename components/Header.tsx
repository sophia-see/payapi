import React from 'react'

interface HeaderProps {
  text: string;
  className?: string;
}

export default function Header({text, className}: HeaderProps) {
  return (
    <div
      className={`
        serif 
        text-[32px] md:text-[48px] lg:text-[72px]
        leading-[36px] md:leading-[56px] lg:leading-[72px]
        tracking-[-0.25px] md:tracking-[-0.37px] lg:tracking-[-0.55px]
        ${className || ""}
      `}
    >
      {text}
    </div>
  )
}
