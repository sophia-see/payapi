import React from 'react'
import Section from './Section'



export default function CultureAndPeople() {
  return (
    <div className='pt-[48px] flex flex-col gap-[48px] px-6 md:px-10 md:pt-[64px] lg:px-[115px] xl:px-0 xl:mx-auto xl:max-w-[1110px]'>
      <Section
        label="The Culture"
        description={"We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."}
      />
      <Section
        label='The People'
        description={" We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."}
      />
    </div>
  )
}
