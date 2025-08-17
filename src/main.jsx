import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Navbar from '../src/components/Navbar.jsx'
import Sobre from '../src/pages/Sobre.jsx'
import Especialidades from './pages/Especialidades.jsx'
import Office from '../src/pages/Office.jsx'
import Equipes from '../src/pages/Equipes.jsx'
import Contato from '../src/pages/Contato.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar/>
       <Sobre/>
       <Especialidades/>
       <Office/>
       <Equipes/>
       <Contato/>
  </StrictMode>,
)
