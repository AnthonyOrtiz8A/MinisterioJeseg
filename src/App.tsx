import BottomNav from './components/BottomNav'
import Header from './components/Header'
import Hero from './components/Hero'
import { Cultos, Footer, Nosotros, Redes, Ubicacion } from './components/Sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Cultos />
        <Redes />
        <Ubicacion />
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
