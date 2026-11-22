import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Procedures } from './sections/procedures/Procedures'
import { Differentials } from './sections/Differentials'
import { Career } from './sections/Career'
import { Clinic } from './sections/Clinic'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Procedures />
        <Differentials />
        <Career />
        <Clinic />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
