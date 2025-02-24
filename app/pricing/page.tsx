import CirclePattern from '@/components/CirclePattern'
import React from 'react'

export default function PricingPage() {
  return (
    <div>
      <CirclePattern 
        parentClass='absolute top-0 right-0 -z-10 overflow-hidden'
        childClass='translate-x-[70%] -translate-y-[80%] h-full place-self-end ml-auto'
      />
      
      {/* temp */}
      <div className="h-[500px]">
        pricing
      </div>
    </div>
  )
}
