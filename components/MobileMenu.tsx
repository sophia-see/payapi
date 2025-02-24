"use client"

import Image from 'next/image'
import React from 'react'
import Divider from './Divider';
import Link from 'next/link';
import Button from './Button';
import CirclePattern from './CirclePattern';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Image
        src={"/assets/shared/mobile/menu.svg"}
        alt='menu icon'
        width={28}
        height={17}
        onClick={() => {
          setIsOpen(true)
        }}
      />
      <div
        className={`
          absolute inset-0
          ${isOpen ? "md:hidden" : "hidden"}
        `}
      >
        <CirclePattern className='z-20'/>
        <div 
          className={`
            relative
            h-full w-fit ml-auto
            bg-mirage-blue
            py-[48px] px-[24px]
          `}
        >
          <div className='flex flex-col'>
            <Image
              src={"/assets/shared/mobile/close.svg"}
              alt='menu icon'
              width={21.92}
              height={21.92}
              className='ml-auto z-20'
              onClick={() => {
                setIsOpen(false)
              }}
            />
            <Divider mode={"light"} className='opacity-15 mt-6 mb-[43px]'/>
            <nav className='flex flex-col gap-8 items-center font-bold text-[20px] text-link-water-white w-[250px]'>
              <Link className='opacity-70' href={"/pricing"}>Pricing</Link>
              <Link className='opacity-70' href={"/about"}>About</Link>
              <Link className='opacity-70' href={"/contact"}>Contact</Link>      
              <Button className='w-full'>Schedule a Demo</Button>      
            </nav>
          </div>          
        </div>

      </div>
    </div>
  )
}
