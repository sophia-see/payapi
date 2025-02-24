import React from 'react'

interface HeaderProps {
  text: string;
  isHero?: boolean;
  className?: string;
}

export default function Header({text, isHero = false, className}: HeaderProps) {
  return (
    <div
      className={`
        ${isHero ? "xl:pb-[calc(72px/1.5)]" : ""}
        serif 
        text-[32px] md:text-[48px] ${isHero ? "xl:text-[72px]" : ""}
        leading-[36px] md:leading-[56px] ${isHero ? "xl:leading-[72px]" : ""}
        tracking-[-0.25px] md:tracking-[-0.37px] ${isHero ? "xl:tracking-[-0.55px]" : ""}
        ${className || ""}
      `}
    >
      {text}
    </div>
  )
}
