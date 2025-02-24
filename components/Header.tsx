import React from 'react'

interface HeaderProps {
  text: string;
  className?: string;
}

export default function Header({text, className}: HeaderProps) {
  return (
    <div
      className={`
        xl:pb-[calc(72px/1.5)]
        serif 
        text-[32px] md:text-[48px] xl:text-[72px]
        leading-[36px] md:leading-[56px] xl:leading-[72px]
        tracking-[-0.25px] md:tracking-[-0.37px] xl:tracking-[-0.55px]
        ${className || ""}
      `}
    >
      {text}
    </div>
  )
}
