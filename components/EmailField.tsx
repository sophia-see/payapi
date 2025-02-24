"use client"

import React from 'react'
import EmailInput from './EmailInput'
import Button from './Button'
import EmailInputWithButton from './EmailInputWithButton'

interface EmailFieldProps {
  className?: string;
}

export default function EmailField({className}: EmailFieldProps) {
  return (
    <div className={`flex flex-col items-center ${className || ""}`}>
      <div className='w-full flex flex-col gap-4 md:hidden'>
        <EmailInput/>
        <Button className='w-full'>Schedule a Demo</Button>
      </div>
      <div className='hidden md:block md:w-[445px]'>
        <EmailInputWithButton />
      </div>
    </div>
  )
}
