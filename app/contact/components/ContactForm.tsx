import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Paragraph from '@/components/Paragraph'
import TextArea from '@/components/TextArea'
import TextField from '@/components/TextField'
import React from 'react'


export default function ContactForm() {
  return (
    <div className='px-6 flex flex-col gap-6 max-w-[445px] mx-auto xl:mx-0'>
      <TextField placeholder='Name' />
      <TextField placeholder='Email Address' />
      <TextField placeholder='Company Name' />
      <TextField placeholder='Title' />
      <TextArea placeholder='Message' />
      <div className='flex gap-[26px] items-center'>
        <Checkbox className='flex-shrink-0'/>
        <Paragraph text='Stay up-to-date with company announcements and updates to our API' />
      </div>
      <Button variant='secondary' mode='dark' className='w-fit px-[50px]'>Submit</Button>
    </div>
  )
}
