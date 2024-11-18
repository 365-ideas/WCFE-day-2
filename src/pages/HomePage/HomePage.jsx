import { Logo } from '@/components/Logo/Logo'
import React from 'react'
import s from "./HomePage.module.scss"

export default function HomePage() {
  return (
    <div className={s.home}>
      <Logo className={s.logo}/>
      For the community. Human community
    </div>
  )
}
