"use client"

import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'
import CirclePattern from './CirclePattern'

export default function Footer() {
  return (
    <footer className='pt-[41px] pb-[55px] bg-mirage-blue flex flex-col items-center gap-10 relative'>
      <Logo mode='dark'/>
      <div className='flex flex-col items-center gap-[31px] font-bold text-[15px] text-link-water-white opacity-70  z-30'>
        <Link href={"/pricing"}>Pricing</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className='flex items-center gap-6 z-30'>
        <Image
          src={"/assets/shared/desktop/facebook.svg"}
          alt='facebook icon'
          width={24}
          height={24}
        />
        <Image
          src={"/assets/shared/desktop/twitter.svg"}
          alt='twitter icon'
          width={24}
          height={24}
        />
        <Image
          src={"/assets/shared/desktop/linkedin.svg"}
          alt='linkedin icon'
          width={24}
          height={24}
        />
      </div>
      <div className='w-full absolute bottom-0 h-[185px] overflow-hidden'>
        <CirclePattern className='z-20 bottom-0 left-0 right-0 translate-y-[595px]'/>  
      </div>
    </footer>
  )
}
