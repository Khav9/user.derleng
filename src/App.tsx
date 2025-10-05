import { Header } from "@/components/layout/header"
import { Hero } from "@/components/layout/hero"
import { Features } from "@/components/layout/feature"
import { Tours } from "@/components/layout/tours"
import { Footer } from "@/components/layout/footer"

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Tours />
      <Footer />
    </main>
  )
}
