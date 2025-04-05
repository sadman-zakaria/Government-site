import './App.css'
import Button from './Componentes/common/Button'
import SectionTitle from './Componentes/common/SectionTitle'
import TextGradiant from './Componentes/common/TextGradiant'
import Brands from './Componentes/home/Brands'
import Faq from './Componentes/home/Faq'
import Hero from './Componentes/home/Hero'
import Note from './Componentes/home/Note'
import ProblemSolution from './Componentes/home/ProblemSolution'
import ProblemSolutionHeader from './Componentes/home/ProblemSolutionHeader'
import Review from './Componentes/home/Review'
import Footer from './Componentes/Nav&Footer/Footer'
import Navber from './Componentes/Nav&Footer/Navber'


const App=()=>{
  return (
    <>
      <main className='bg-[url(/hero-bg.svg)] bg-no-repeat bg-hero-bg min-h-svh  bg-top'>
      <Navber />
      
      <Hero/>
      <ProblemSolution/>
      
      <Review/>
      <Brands/>
      <Faq />
      <Note/>

      <Footer/>
      </main>
    </>
  )
}

export default App
