import React from 'react'

interface SubHeaderProps {
  text: string;
  className?: string;
}

export default function SubHeader({text, className}: SubHeaderProps) {
  return (
    <div
      className={`
        text-light-san-juan-blue
        text-[15px] 
        leading-[28px] 
        tracking-[0px]
        ${className || ""}
      `}
    >
      {text}
    </div>
  )
}
