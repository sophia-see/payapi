"use client"

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <header className='flex justify-between items-center pt-10 px-6'>
      <Logo />
      <MobileMenu />
      <nav className='hidden'>
        <Link href={"/pricing"}>Pricing</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </header>
  )
}
