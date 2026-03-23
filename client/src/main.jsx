import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Headline from './components/Headline/Headline.jsx'
import ProblemProstor from './components/ProblemProstor/ProblemProstor.jsx'
import IskustvoSekcija from './components/IskustvoSekcija/IskustvoSekcija.jsx'
import DobitakSekcija from './components/DobitakSekcija/DobitakSekcija.jsx'
import IskustvoRadi from './components/IskustvoRadi/IskustvoRadi.jsx'
import ProgramSekcija from './components/ProgramSekcija/ProgramSekcija.jsx'
import TimSekcija from './components/TimSekcija/TimSekcija.jsx'
import LokacijaSekcija from './components/LokacijaSekcija/LokacijaSekcija.jsx'
import StrukturaDana from './components/StrukturaDana/StrukturaDana.jsx'
import SmjestajSekcija from './components/SmjestajSekcija/SmjestajSekcija.jsx'
import KvalifikacijaSekcija from './components/KvalifikacijaSekcija/KvalifikacijaSekcija.jsx'
import Investicija from './components/Investicija/Invasticija.jsx'
import Vazno from './components/Vazno/Vazno.jsx'
import VaznoSekcija from './components/VaznoSekcija/VaznoSekcija.jsx'
import FinalCTA from './components/FinalCTA/FinalCTA.jsx'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headline />
    <ProblemProstor />
    <IskustvoSekcija />
    <DobitakSekcija />
    <IskustvoRadi />
    <ProgramSekcija />
    <TimSekcija />
    <LokacijaSekcija />
    <StrukturaDana />
    <SmjestajSekcija />
    <KvalifikacijaSekcija />
    <Investicija />
    <VaznoSekcija />
    <FinalCTA />
    <Footer />
  </StrictMode>,
)