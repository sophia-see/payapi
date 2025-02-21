"use client"

import React from 'react'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: string | null | undefined;
}

export default function TextArea({className, error, ...props}: TextAreaProps) {
  return (
    <div className='flex flex-col items-start gap-2'>
      <textarea
        className={`
          w-full h-[90px] 
          px-5
          border-b-[1px] border-san-juan-blue 
          outline-none
          bg-transparent resize-none overflow-auto
          text-[15px] leading-[15px] tracking-[-0.12px] text-san-juan-blue placeholder:text-san-juan-blue
          opacity-50 focus:opacity-100
          ${className || ""}
          ${error ? "border-red text-red placeholder:text-red" : ""}
        `}
        placeholder='Type here...'
        {...props}
      />
      {!!error && (
        <div className='pl-5 opacity-50 text-[11px] tracking-[-0.08px] text-red'>{error}</div>
      )}
    </div>
  )
}
