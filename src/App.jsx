import './App.css'
import TrustedUsers from './components/TrustedUsers/TrustedUsers'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Faq from './components/Faq/Faq'
import NavBar from './components/NavBar/NavBar'
import LifeStyleIcons from './components/LifeStyleIcons/LifeStyleIcons'

function App() {
  return (
    <>
      <NavBar />
      <TrustedUsers />
      <LifeStyleIcons />
      <HowItWorks />
      <Faq />
    </>
  )
}

export default App
