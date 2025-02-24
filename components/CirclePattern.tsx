import Image from 'next/image'
import React from 'react'


export default function CirclePattern({className}: {className?: string}) {
  return (
    <div className={`absolute overflow-hidden -z-10 ${className || ""}`}>
      <div className="w-[780px] h-[780px]">
        <Image
          src="/assets/shared/desktop/bg-pattern-circle.svg"
          alt="circle background pattern"
          width={0}
          height={0}
          fill
          className="object-cover"
        />
      </div>            
    </div>
  )
}
