import Header from '@/components/Header'
import Paragraph from '@/components/Paragraph'
import SubHeader from '@/components/SubHeader'
import Image from 'next/image'
import React from 'react'

const USAGES = [
  {
    name: "Personal Finances",
    description: "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
    image: "icon-personal-finances"
  },
  {
    name: "Banking & Coverage",
    description: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
    image: "icon-banking-and-coverage"
  },
  {
    name: "Consumer Payments",
    description: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
    image: "icon-consumer-payments"
  },
]

export default function Usage() {
  return (
    <section 
      className={`
        w-full lg:max-w-[1110px] lg:mx-auto
        mx-6 md:mx-[40px]
        flex flex-col gap-[48px] items-center md:gap-[10px] md:items-start md:flex-row lg:gap-[30px]
      `}
    >
      {
        USAGES.map((usage, index) => (
          <div 
            key={usage.name} 
            className={`
              w-full
              flex flex-col
              items-center
              gap-[32px]
            `}
          >
            <Image
              src={`/assets/home/desktop/${usage.image}.svg`}
              alt={`${usage.name} illustration`}
              width={106}
              height={106}
            />
            <div className='flex flex-col gap-4 items-center text-center'>
              <div className='font-bold text-[18px] leading-[25px] tracking-[-0.14px]'>
                {usage.name}
              </div>
              <Paragraph text={usage.description} />
            </div>
          </div>
        ))
      }
    </section>
  )
}
