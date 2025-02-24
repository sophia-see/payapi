import Image from 'next/image'
import React from 'react'

interface CirclePatternProps {
  parentClass?: string;
  childClass?: string;
}


export default function CirclePattern({parentClass, childClass}: CirclePatternProps) {
  return (
    <div className={`${parentClass || ""}`}>
      <div className={`flex ${childClass || ""}`}>
        <Image
          src="/assets/shared/desktop/bg-pattern-circle.svg"
          alt="circle background pattern"
          width={780}
          height={780}
          className="flex-shrink-0 w-[780px] h-[780px] aspect-square object-cover object-center"
        />
      </div>
    </div>
  )
}
