import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ProductDemo from './components/ProductDemo'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
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









