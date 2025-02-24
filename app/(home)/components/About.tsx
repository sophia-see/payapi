import Button from '@/components/Button'
import Header from '@/components/Header'
import SubHeader from '@/components/SubHeader'
import Image from 'next/image'
import React from 'react'

const COMPANIES = [
  "tesla",
  "microsoft",
  "hewlett-packard",
  "oracle",
  "google",
  "nvidia",
]

function CompanyLogos() {
  return (
    <div className='px-12 grid grid-cols-2 gap-10 justify-between md:px-[116px] md:grid-cols-3'>
      {COMPANIES.map((company) => {
        return (
          <Image
            src={`/assets/shared/desktop/${company}.svg`}
            alt={`${company} logo`}
            width={100}
            height={20}
            key={company}
            className='filter invert brightness-0 object-contain place-self-center'
          />
        )
      })}
    </div>
  )
}

export default function About() {
  return (
    <section className='py-20 flex flex-col gap-14 bg-mirage-blue md:py-[88px] md:gap-[64px]'>
      <CompanyLogos />
      <div className='px-6 flex flex-col items-center gap-[32px] md:px-[155px]'>
        <div className='text-link-water-white flex flex-col items-center gap-4 text-center md:gap-6'>
          <Header text='Who we work with' />
          <SubHeader className='text-link-water-white opacity-70' text='Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. ' />
        </div>
        <Button variant='secondary' className='w-fit px-8'>About Us</Button>
      </div>
    </section>
  )
}
