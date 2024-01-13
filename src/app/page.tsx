import About from '@/components/sections/About'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'

export default function Home() {
  return (
    <>
      <Header />
      <About />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
    <Footer />
    </>
  )
}
