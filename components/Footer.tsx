"use client"

import React from 'react'
import Logo from './Logo'
import Link, { LinkProps } from 'next/link'
import Image from 'next/image'
import CirclePattern from './CirclePattern'


interface NavLinkProps extends LinkProps {
  children?: React.ReactNode;
}

function NavLink ({children, ...props}: NavLinkProps) {
  return (
    <Link 
      className='font-bold text-[15px] text-link-water-white opacity-70 hover:opacity-100 transition duration-100' 
      {...props}
    >
      {children}
    </Link>
  )
}


export default function Footer() {
  return (
    <footer 
      className={`
        pt-[41px] pb-[55px] md:py-8 md:px-10 lg:px-[135px] xl-1440:px-[165px]
        bg-mirage-blue 
        flex flex-col items-center gap-10 md:flex-row md:gap-16
        relative overflow-hidden
      `}
    >
      <Logo mode='dark'/>
      <div className='flex flex-col items-center gap-[31px] z-30 md:flex-row md:gap-10'>
        <NavLink href={"/pricing"}>Pricing</NavLink>
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/contact"}>Contact</NavLink>
      </div>
      <div className='flex items-center gap-6 z-30 md:flex-1 md:place-content-end'>
        <Image
          src={"/assets/shared/desktop/facebook.svg"}
          alt='facebook icon'
          width={24}
          height={24}
          className="cursor-pointer filter invert brightness-0 hover:filter-none"
        />
        <Image
          src={"/assets/shared/desktop/twitter.svg"}
          alt='twitter icon'
          width={24}
          height={24}
          className="cursor-pointer filter invert brightness-0 hover:filter-none"
        />
        <Image
          src={"/assets/shared/desktop/linkedin.svg"}
          alt='linkedin icon'
          width={24}
          height={24}
          className="cursor-pointer filter invert brightness-0 hover:filter-none"
        />
      </div>
      <CirclePattern 
        parentClass='w-full absolute bottom-0 h-[185px] overflow-hidden'
        childClass='absolute bottom-0 left-0 right-0 translate-y-[calc(780px-185px)] md:translate-x-[55%]'
      />  
    </footer>
  )
}
