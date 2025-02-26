import { COMPANIES } from '@/app/(home)/components/About'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

function CompanyLogos() {
  return (
    <div className='px-12 grid grid-cols-2 gap-10 justify-between md:px-[116px] md:grid-cols-3 lg:px-0 md:max-w-[541px] md:mx-auto xl:mx-0'>
      {COMPANIES.map((company) => {
        return (
          <Image
            src={`/assets/shared/desktop/${company}.svg`}
            alt={`${company} logo`}
            width={100}
            height={20}
            key={company}
            className='w-full aspect-[130/33] object-contain place-self-center'
          />
        )
      })}
    </div>
  )
}

export default function Partners() {
  return (
    <div className='pt-20 flex flex-col gap-8 justify-center text-center mx-6 xl:justify-start xl:text-start xl:pt-0 xl:mx-0'>
      <Title text='Join the thousands of innovators already building with us' className='md:max-w-[445px] md:mx-auto xl:mx-0 xl:max-w-none'/>
      <CompanyLogos />
    </div>
  )
}
