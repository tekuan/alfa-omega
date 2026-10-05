import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Orchestra from './pages/Orchestra'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orquestra" element={<Orchestra />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App