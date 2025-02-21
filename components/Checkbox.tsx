"use client"

import Image from 'next/image'
import React from 'react'

function Check() {
  return (
    <Image
      src={"/assets/shared/desktop/icon-check.svg"}
      width={11.32}
      height={8.15}
      alt='check icon'
      className='filter invert brightness-0 select-none'
    />
  )
}

interface CheckboxProps {
}

export default function Checkbox({}: CheckboxProps) {
  const [isChecked, setIsChecked] = React.useState(false);

  const onClickCheckbox = () => {
    setIsChecked(prev => !prev)
  }

  return (
    <div 
      className={`
        transition duration-100
        flex justify-center items-center
        relative
        cursor-pointer
        w-6 h-6
        ${isChecked ? "bg-dark-pink" : "bg-san-juan-blue opacity-25"}
      `}
      onClick={onClickCheckbox}
    >
      {isChecked && <Check />}
    </div>
  )
}
