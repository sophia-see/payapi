import React from 'react'
import Section from './Section'



export default function VisionAndBusiness() {
  return (
    <div className='flex flex-col gap-[48px] px-6 md:px-10 lg:px-[115px] xl:px-0 xl:mx-auto xl:max-w-[1110px]'>
      <Section
        label="Our Vision"
        description='Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. '
      />
      <Section
        label='Our Business'
        description='At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. '
      />
    </div>
  )
}
