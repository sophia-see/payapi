"use client"

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import Button from './Button'

export default function Navbar() {
  return (
    <header className='flex justify-between lg:justify-start lg:gap-16 items-center pt-10 px-6 md:pt-[45px] md:px-10 lg:px-[165px]'>
      <Logo />
      <MobileMenu />
      <nav className='hidden md:flex gap-10 font-bold text-[15px] text-san-juan-blue opacity-70'>
        <Link href={"/pricing"}>Pricing</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <div className='hidden md:block lg:flex-1 lg:text-end'>
        <Button className='rounded-full'>Schedule a Demo</Button>
      </div>
    </header>
  )
}
