"use client"

import React from 'react'
import Header from './Header'
import EmailInput from './EmailInput'
import Button from './Button'
import EmailInputWithButton from './EmailInputWithButton'

export default function CTA() {
  return (
    <section className='flex flex-col  gap-8 items-center px-6 py-20 mx-auto text-center md:px-0 xl:flex-row xl:justify-between xl:px-[115px] xl-1440:px-[165px]'>
      <Header text='Ready to start?' />
      <div className='w-full flex flex-col gap-4 md:hidden'>
        <EmailInput/>
        <Button className='w-full'>Schedule a Demo</Button>
      </div>
      <div className='hidden md:block md:w-[445px]'>
        <EmailInputWithButton />
      </div>
    </section>
  )
}
