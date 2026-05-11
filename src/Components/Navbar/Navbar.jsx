//import React from 'react'//
import { Link } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
     <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  )
}

export default Navbar
