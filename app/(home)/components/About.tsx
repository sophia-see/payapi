import Button from '@/components/Button'
import CirclePattern from '@/components/CirclePattern'
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
    <div className='px-12 grid grid-cols-2 gap-10 justify-between md:px-[116px] md:grid-cols-3 lg:px-0 lg:grid-cols-2 xl:grid-cols-3'>
      {COMPANIES.map((company) => {
        return (
          <Image
            src={`/assets/shared/desktop/${company}.svg`}
            alt={`${company} logo`}
            width={100}
            height={20}
            key={company}
            className='w-full aspect-[130/33] filter invert brightness-0 object-contain place-self-center'
          />
        )
      })}
    </div>
  )
}

export default function About() {
  return (
    <section className='relative bg-mirage-blue'>
      <div className='lg:max-w-[1110px] lg:mx-auto py-20 md:py-[88px] lg:py-[100px] flex flex-col gap-14 md:gap-[64px] lg:flex-row lg:items-center lg:justify-between'>
        <CompanyLogos />
        <div className='px-6 flex flex-col items-center gap-[32px] md:px-[155px] lg:order-first lg:items-start lg:px-0 lg:max-w-[400px] xl:max-w-[445px]'>
          <div className='text-link-water-white flex flex-col items-center gap-4 text-center md:gap-6 lg:items-start lg:text-start'>
            <Header text='Who we work with' />
            <SubHeader className='text-link-water-white opacity-70' text='Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. ' />
          </div>
          <Button variant='secondary' className='w-fit px-8'>About Us</Button>
        </div>        
      </div>

      {/* <CirclePattern 
        parentClass='w-full absolute top-0 left-0 h-[230px] overflow-hidden'
        childClass='absolute bottom-0 left-0 right-0 translate-y-[-calc(780px-230px)] lg:translate-x-[35%]'
      />   */}
      <CirclePattern 
        parentClass='w-full absolute top-0 bottom-0 overflow-hidden lg:left-0'
        childClass='absolute top-0 left-0 right-0 translate-y-[-85%] lg:translate-y-[-75%] lg:translate-x-[-15%] bottom-0'
      />  
    </section>
  )
}
