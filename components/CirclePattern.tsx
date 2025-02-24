import Image from 'next/image'
import React from 'react'

interface CirclePatternProps {
  parentClass?: string;
  childClass?: string;
}


export default function CirclePattern({parentClass, childClass}: CirclePatternProps) {
  return (
    <div className={`${parentClass || ""}`}>
        <div className={`${childClass || ""}`}>
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
    </div>
  )
}
