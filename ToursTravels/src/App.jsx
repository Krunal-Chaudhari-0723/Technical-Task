import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Destination from './components/Destinations'
import ThreeSteps from './components/ThreeSteps'

function App() {
    return(
      <div>
        <Navbar/>
        <main>
           <Hero/>
           <Services/>
           <Destination/>
           <ThreeSteps/>
        </main>
      </div>
    )
}

export default App
