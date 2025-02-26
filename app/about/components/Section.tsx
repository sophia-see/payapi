import SubHeader from '@/components/SubHeader';
import Title from '@/components/Title';
import React from 'react'

interface SectionProps {
  label: string;
  description: string;
}

export default function Section({label, description}: SectionProps) {
  return (
    <div className='flex flex-col gap-4 justify-center text-center md:flex-row md:justify-start md:text-start md:gap-[10px]'>
      <Title text={label}  className='md:w-[223px] flex-shrink-0'/>
      <SubHeader text={description} />
    </div>
  )
}
