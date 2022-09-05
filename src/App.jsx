import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import NovoCadastro from './pages/NovoCadastro'
import Home from './pages/Home'
import ConsultaCadastro from './pages/ConsultaCadastro'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novocadastro" element={<NovoCadastro />} />
          <Route path="/ConsultaCadastro" element={<ConsultaCadastro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
