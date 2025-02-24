"use client"

import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Logo() {
  return (
    <Image
      src={"/assets/shared/desktop/logo.svg"}
      alt={"payapi logo"}
      width={133.9}
      height={36.77}
      onClick={() => {
        redirect("/")
      }}
    />
  )
}
