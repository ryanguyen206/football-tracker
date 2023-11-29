import Image from 'next/image'
import Hero from '@/components/Hero'
import Weekly from '@/components/WeeklyMatches/Weekly'
import TeamStats from '@/components/Table/TeamStats'


export default function Home() {
  return (
    <main>
      <Hero/>
      <Weekly/>
      <TeamStats/>
    </main>
  )
}
