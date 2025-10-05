import { About } from '@/components/about'
import { Destinations } from '@/components/destinations'
import { Features } from '@/components/feature'
import { Hero } from '@/components/layout/hero'
import { Tours } from '@/components/tours'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Features/>
    <Tours/>
    <Destinations/>
    </>
  )
}

export default Home