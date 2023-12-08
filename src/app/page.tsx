import Image from 'next/image'
import Hero from '@/components/Hero'
import Weekly from '@/components/WeeklyMatches/Weekly'
import TeamStats from '@/components/Table/TeamStats'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: 'Home page'
}

export default function Home() {
  return (
    <main>
      <Hero/>
      <Weekly/>
      <TeamStats/>
    </main>
  )
}
