"use client"

import React from 'react'
import Header from './Header'
import EmailInput from './EmailInput'
import Button from './Button'

export default function CTA() {
  return (
    <div className='flex flex-col gap-8 items-center px-6 py-20'>
      <Header text='Ready to start?' />
      <div className='w-full flex flex-col gap-4'>
        <EmailInput placeholder='Enter email address' />
        <Button className='w-full'>Schedule a Demo</Button>
      </div>
    </div>
  )
}
