import React from 'react'

interface ParagraphProps {
  text: string;
  className?: string;
}

export default function Paragraph({text, className}: ParagraphProps) {
  return (
    <div
      className={`
        text-light-san-juan-blue
        text-[15px] 
        leading-[25px] 
        tracking-[-0.12px]
        ${className || ""}
      `}
    >
      {text}
    </div>
  )
}
