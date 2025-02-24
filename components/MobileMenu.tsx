"use client"

import Image from 'next/image'
import React from 'react'
import Divider from './Divider';
import Link, { LinkProps } from 'next/link';
import Button from './Button';
import CirclePattern from './CirclePattern';
import { usePathname } from 'next/navigation';

interface NavLinkProps extends LinkProps {
  children?: React.ReactNode;
}

function NavLink ({children, ...props}: NavLinkProps) {
  return (
    <Link 
      className='opacity-70 py-4' 
      {...props}
    >
      {children}
    </Link>
  )
}

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen]);

  return (
    <div className='md:hidden'>
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
          z-10
        `}
      >
        <div 
          ref={menuRef}
          className={`
            relative
            h-full w-[298px] ml-auto
            bg-mirage-blue
            py-[48px] px-[24px]
            overflow-hidden
            `}
        >
          <CirclePattern 
            parentClass='absolute top-0 right-0 z-0 overflow-hidden'
            childClass='w-screen h-screen -translate-y-[85%] h-full place-self-end ml-auto'
          />
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
            <Divider mode={"light"} className='opacity-15 mt-6 mb-[calc(43px-16px)]'/>
            <nav className='flex flex-col items-center font-bold text-[20px] text-link-water-white w-[250px]'>
              <NavLink href={"/pricing"}>Pricing</NavLink>
              <NavLink href={"/about"}>About</NavLink>
              <NavLink href={"/contact"}>Contact</NavLink>      
              <Button className='w-full mt-4'>Schedule a Demo</Button>      
            </nav>
          </div>          
        </div>

      </div>
    </div>
  )
}
