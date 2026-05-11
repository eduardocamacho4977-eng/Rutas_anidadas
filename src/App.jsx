import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

import Home from "./pages/Home"
import Productos from "./pages/Productos"
import Hombre from "./pages/Hombre"
import Mujer from "./pages/Mujer"
import Contacto from "./pages/Contacto"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/productos" element={<Productos />}>

          <Route path="hombre" element={<Hombre />} />

          <Route path="mujer" element={<Mujer />} />

        </Route>

        <Route path="/contacto" element={<Contacto />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App