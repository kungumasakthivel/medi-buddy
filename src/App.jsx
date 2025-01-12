import './App.css'
import TrustedUsers from './components/TrustedUsers/TrustedUsers'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Faq from './components/Faq/Faq'
import NavBar from './components/NavBar/NavBar'
import LifeStyleIcons from './components/LifeStyleIcons/LifeStyleIcons'
import LabsVisited from './components/LabsVisited/LabsVisited'
import AddBooking from './components/AddBooking/AddBooking'

function App() {
  return (
    <>
      <NavBar />
      <AddBooking />
      <LabsVisited />
      <TrustedUsers />
      <LifeStyleIcons />
      <HowItWorks />
      <Faq />
    </>
  )
}

export default App
