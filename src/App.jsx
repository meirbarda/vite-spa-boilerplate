import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Specifications from './components/Specifications'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <Specifications />
      </main>
      <Footer />
    </>
  )
}

export default App
