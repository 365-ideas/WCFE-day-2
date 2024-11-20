"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Logo = ({...rest}) => {
  return (
    <motion.div {...rest}>
      <Image
        src="/images/FullLogo.svg"
        fill
        alt="logo"
        style={{ objectFit: 'contain' }}
      />
    </motion.div>
  )
}

export const LogoSmall = ({...rest}) => {
  return (
    <motion.div {...rest}>
      <Image
        src="/images/OneLogo.svg"
        fill
        alt="logo"
        style={{ objectFit: 'contain' }}
      />
    </motion.div>
  )
}

export const LogoHD = ({...rest}) => {
  return (
    <motion.div {...rest}>
      <Image
        src="/images/HDLogo.svg"
        fill
        alt="logo"
        style={{ objectFit: 'contain' }}
      />
    </motion.div>
  )
}
