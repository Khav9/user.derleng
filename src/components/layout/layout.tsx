import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <main className="min-h-screen">
      <Header />
      <Outlet/>
      <Footer />
    </main>
  )
}
