"use client"

import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

interface LogoProps {
  mode?: "light" | "dark";
}

export default function Logo({mode = "light"}: LogoProps) {
  const isDark = mode == "dark";

  return (
    <Image
      src={"/assets/shared/desktop/logo.svg"}
      alt={"payapi logo"}
      width={133.9}
      height={36.77}
      onClick={() => {
        redirect("/")
      }}
      className={isDark ? "filter invert brightness-0" : ""}
    />
  )
}
