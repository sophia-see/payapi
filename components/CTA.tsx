"use client"

import React from 'react'
import Header from './Header'
import EmailInput from './EmailInput'
import Button from './Button'
import EmailInputWithButton from './EmailInputWithButton'

export default function CTA() {
  return (
    <section className='lg:max-w-[1110px] lg:mx-auto flex flex-col gap-8 items-center mx-6 py-20 text-center md:mx-0 xl:flex-row xl:justify-between'>
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
