import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import NovoCadastro from './pages/NovoCadastro'
import Home from './pages/Home'
import ConsultaCadastro from './pages/ConsultaCadastro'
import PrincipaisQueixas from './components/Form/PrincipaisQueixas'
import HistoricoDeSaude from './components/Form/HistoricoDeSaude'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novocadastro" element={<NovoCadastro />} />
          <Route path="/ConsultaCadastro" element={<ConsultaCadastro />} />
          <Route path="/principaisqueixas" element={<PrincipaisQueixas />} />
          <Route path="/historicodesaude" element={<HistoricoDeSaude />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
