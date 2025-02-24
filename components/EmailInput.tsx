"use client"

import React from 'react'

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function EmailInput({className, ...props}: EmailInputProps) {
  return (
    <input 
      className={`
        rounded-[24px]
        pt-[16px] pb-[14px] px-[27px]
        font-bold text-[15px] text-san-juan-blue placeholder:opacity-50
        outline-none
        shadow-[10px_10px_25px_-10px_rgba(54,83,107,0.25)]
      `}
      placeholder='Enter email address'
      {...props}
    />
  )
}
