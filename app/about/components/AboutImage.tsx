"use client"

import useDeviceSize from '@/hooks/use-device-size'
import Image from 'next/image'
import React from 'react'

export default function AboutImage() {
  const {currSize} = useDeviceSize();

  return (
    <Image
      src={`/assets/about/${currSize}/image-team-members.jpg`}
      alt='team members having a meeting'
      width={375}
      height={300}
      className='mt-[76px] mb-[48px] md:mt-[92px] md:mb-[64px] lg:mt-[100px] lg:mb-[72px] w-full h-[300px] md:h-[267px] lg:h-[500px] object-cover object-center xl:max-w-[1110px] xl:mx-auto'
    />
  )
}
