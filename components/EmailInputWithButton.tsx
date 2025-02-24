"use client"

import React from 'react'
import Button from './Button';

interface EmailInputWithButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function EmailInputWithButton({className, ...props}: EmailInputWithButtonProps) {
  return (
    <div className='relative w-full rounded-[24px] overflow-hidden shadow-[10px_10px_25px_-10px_rgba(54,83,107,0.25)]'>
      <input 
        className={`
          pt-[16px] pb-[14px] px-[27px]
          font-bold text-[15px] text-san-juan-blue placeholder:opacity-50
          outline-none
          md:w-full md:pr-[190px]
          
        `}
        placeholder='Enter email address'
        {...props}
      />
      <Button className='absolute right-0 w-fit'>Schedule a Demo</Button>
    </div>
  )
}
