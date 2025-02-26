import CirclePattern from '@/components/CirclePattern'
import Header from '@/components/Header'
import React from 'react'
import VisionAndBusiness from './components/VisionAndBusiness'
import Image from 'next/image'
import AboutImage from './components/AboutImage'
import Stats from './components/Stats'
import CultureAndPeople from './components/CultureAndPeople'

export default function AboutPage() {
  return (
    <div>
      <CirclePattern 
        parentClass={`
          absolute 
          top-0 
          right-0
          left-0
          -z-10 
          lg:w-full
          lg:h-[600px]
          lg:max-w-[1110px] lg:mx-auto 
        `}
        childClass={`
          absolute right-[-125%] md:right-[-65%] lg:right-[-30%]
          translate-y-[-85%] md:translate-y-[-65%] lg:translate-y-[-75%]
          flex items-start
        `}
      />
      <div 
        className={`
          px-6 md:px-[98px] lg:px-[115px] xl:px-0 
          pt-[48px] pb-[40px] md:pt-[75px] md:pb-[54px] lg:pt-[82px] lg:pb-[51px] 
          xl:mx-auto 
          xl:max-w-[1110px] 
          flex justify-center lg:justify-start
          text-center lg:text-start
        `}
      >
        <Header isHero={true} text='We empower innovators by delivering access to the financial system' />
      </div>
      <VisionAndBusiness />
      <AboutImage />
      <Stats />
      <CultureAndPeople />
    </div>
  )
}
