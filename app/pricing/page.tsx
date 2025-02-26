import CirclePattern from '@/components/CirclePattern'
import Header from '@/components/Header'
import React from 'react'
import Plans from './components/Plans'

export default function PricingPage() {
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
      <div className='px-6 lg:px-[115px] xl:px-0 xl:mx-auto xl:max-w-[1110px] flex justify-center py-12 md:pt-[75px] md:pb-[69px] lg:pt-[82px] lg:pb-[72px] lg:justify-start'>
        <Header isHero={true} text='Pricing' />
      </div>
      <Plans />
    </div>
  )
}
