"use client"

import Button from '@/components/Button'
import EmailInput from '@/components/EmailInput'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col items-center gap-6 px-6 pt-[32px] pb-[80px]'>
      <Image
        src={"/assets/home/desktop/illustration-phone-mockup.svg"}
        width={130}
        height={239}
        alt='phone mockup of pay api'
      />
      <div className='flex flex-col gap-6 items-center text-center'>
        <Header text='Start building with our APIs for absolutely free.' />
        <div className='w-full flex flex-col gap-4 md:hidden'>
          <EmailInput/>
          <Button className='w-full'>Schedule a Demo</Button>
        </div>
      </div>
      <div>
        <div className='text-light-san-juan-blue text-[15px]'>
          Have any questions?{" "}
          <span className='font-bold'>Contact Us</span>
        </div>
      </div>
    </div>
  )
}
