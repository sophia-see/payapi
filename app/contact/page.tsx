import CirclePattern from '@/components/CirclePattern'
import Header from '@/components/Header'
import React from 'react'
import ContactForm from './components/ContactForm'
import Partners from './components/Partners'

export default function ContactPage() {
  return (
    <div>
      <CirclePattern 
        parentClass={`
          absolute 
          top-0 
          right-0
          left-0
          -z-10 
          overflow-hidden
          w-screen h-screen
          `}
        childClass={`
          absolute right-[-125%]
          translate-y-[-85%]
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
        <Header isHero={true} text='Submit a help request and we’ll get in touch shortly.' />
      </div>
      <div className='flex flex-col xl:flex-row xl:items-center xl:max-w-[1110px] xl:mx-auto xl:justify-center xl:gap-[124px]'>
        <ContactForm />
        <Partners />
      </div>
    </div>
  )
}
