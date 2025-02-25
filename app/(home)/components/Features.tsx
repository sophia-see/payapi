import Header from '@/components/Header'
import SubHeader from '@/components/SubHeader'
import Image from 'next/image'
import React from 'react'

const FEATURES = [
  {
    name: "Easy to implement",
    description: "Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.",
    image: "illustration-easy-to-implement"
  },
  {
    name: "Simple UI & UX",
    description: "Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.",
    image: "illustration-simple-ui"
  },
]

export default function Features() {
  return (
    <section 
      className={`
        w-full
        py-20 px-6 md:py-[100px] md:px-[98px] lg:py-[150px] lg:px-[115px] xl-1440:px-[165px]
        flex flex-col gap-20 items-center lg:gap-[150px]
      `}
    >
      {
        FEATURES.map((feature, index) => (
          <div 
            key={feature.name} 
            className={`
              w-full
              flex flex-col lg:flex-row 
              items-center lg:justify-center
              gap-[48px] lg:gap-10 xl:gap-[125px]
            `}
          >
            <Image
              src={`/assets/home/desktop/${feature.image}.svg`}
              alt={`${feature.name} illustration`}
              width={327}
              height={290}
              className={`flex-shrink w-full md:px-[91px] lg:px-0 ${(index % 2) != 0 ? "order-last" : ""} lg:max-w-[565px]`}
            />
            <div className='flex flex-col gap-6 items-center text-center lg:w-[400px] lg:flex-shrink-0 lg:text-start lg:items-start xl:w-[445px]'>
              <Header text={feature.name} />
              <SubHeader text={feature.description} />
            </div>
          </div>
        ))
      }
    </section>
  )
}
