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
      `}
      {...props}
    />
  )
}
