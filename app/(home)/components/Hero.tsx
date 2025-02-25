"use client"

import Button from '@/components/Button'
import EmailField from '@/components/EmailField'
import EmailInput from '@/components/EmailInput'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section 
      className={`
        flex flex-col items-center lg:flex-row lg:justify-between lg:gap-[150px]
        gap-6 md:gap-[48px]
        px-6 pt-[32px] pb-[80px] md:pt-[48px] md:pb-[100px] lg:pt-[74px] lg:px-[115px]
        md:mx-auto 
        md:max-w-[573px]
        lg:max-w-none
        xl:mx-auto
        xl:px-0
        xl:max-w-[1110px]
      `}
    >
      <Image
        src={"/assets/home/desktop/illustration-phone-mockup.svg"}
        width={130}
        height={239}
        alt='phone mockup of pay api'
        className='h-auto md:w-[158px] lg:w-[180px] xl:w-[262px]'
      />
      <div className='flex flex-col gap-6 items-center text-center md:gap-[22px] lg:order-first lg:text-start lg:items-start lg:max-w-[420px] xl:max-w-[546px]'>
        <Header text='Start building with our APIs for absolutely free.' isHero={true}/>
        <EmailField className='w-full lg:w-fit'/>
        <div className='text-light-san-juan-blue text-[15px] lg:ml-[27px]'>
          Have any questions?{" "}
          <span className='font-bold mt-2'>Contact Us</span>
        </div>
      </div>
    </section>
  )
}
