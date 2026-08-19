import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ProductDemo from './components/ProductDemo'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import EasterEgg from './components/EasterEgg'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0d0f12', color: '#e4e6eb' }}>
      <EasterEgg />
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Features />
        <HowItWorks />
        <ProductDemo />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
