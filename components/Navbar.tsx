"use client"

import Link, { LinkProps } from 'next/link'
import React from 'react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import Button from './Button'

interface NavLinkProps extends LinkProps {
  children?: React.ReactNode;
}

function NavLink ({children, ...props}: NavLinkProps) {
  return (
    <Link 
      className='font-bold text-[15px] text-san-juan-blue opacity-70 hover:opacity-100 transition duration-100' 
      {...props}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className='flex justify-between lg:justify-start lg:gap-16 items-center pt-10 px-6 md:pt-[45px] md:px-10 lg:px-[135px] xl-1440:px-[165px]'>
      <Logo />
      <MobileMenu />
      <nav className='hidden md:flex gap-10'>
        <NavLink href={"/pricing"}>Pricing</NavLink>
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/contact"}>Contact</NavLink>
      </nav>
      <div className='hidden md:block lg:flex-1 lg:text-end'>
        <Button>Schedule a Demo</Button>
      </div>
    </header>
  )
}
