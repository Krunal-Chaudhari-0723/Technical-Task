import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Destination from './components/Destinations'
import ThreeSteps from './components/ThreeSteps'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
// import "./i18n";

function App() {
    return(
      <div>
        <Navbar/>
        <main>
           <Hero/>
           <Services/>
           <Destination/>
           <ThreeSteps/>
           <Testimonials/>
           <Clients/>
           <Newsletter/>
        </main>
        <Footer/>
      </div>
    )
}

export default App
