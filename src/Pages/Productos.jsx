import { Link, Outlet } from "react-router-dom"

const Productos = () => {
  return (
    <div>
      <h2>Productos</h2>

      <Link to="hombre">Hombre</Link>
      <Link to="mujer">Mujer</Link>

      <Outlet />
    </div>
  )
}

export default Productos