import Divider from '@/components/Divider'
import React from 'react'

interface StatsItemProps {
  label: string;
  value: string;
}

function StatsItem({label, value}: StatsItemProps) {
  return (
    <div className='w-full flex flex-col items-center md:items-start'>
      <div className='opacity-70 text-[16px] leading-[28px]'>{label}</div>
      <div className='serif text-dark-pink text-[56px] leading-[72px] tracking-[-0.43px]'>{value}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className='w-full flex flex-col gap-4 px-6 md:px-10 lg:px-[115px] xl:px-0 xl:mx-auto xl:max-w-[1110px]'>
      <Divider mode={"dark"} className='opacity-25'/>
      <div className='w-full flex flex-col items-center gap-8 md:flex-row md:items-start'>
        <StatsItem label='Team Members' value='300+' />
        <StatsItem label='Offices in the US' value='3' />
        <StatsItem label='Transaction analyzed' value='10M+' />
      </div>
      <Divider mode={"dark"} className='opacity-25'/>
    </div>
  )
}
