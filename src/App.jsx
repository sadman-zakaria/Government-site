import './App.css'
import Button from './Componentes/common/Button'
import SectionTitle from './Componentes/common/SectionTitle'
import TextGradiant from './Componentes/common/TextGradiant'


const App=()=>{
  return (
    <>
      
      <p className="text-5xl">
        Click on the Vite and React logos to learn more
      </p>

      <Button>Get Started</Button>
      
      <Button className=''>
        Lets Get Started
      </Button>
      <SectionTitle gradiant={"Solution"}>Problem & </SectionTitle>
      
    </>
  )
}

export default App
