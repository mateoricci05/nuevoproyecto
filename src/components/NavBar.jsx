import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      <Link to="/">Inicio</Link>
      <Link to="/category/iphone">iPhones</Link>
      <Link to="/category/bebidas">Bebidas</Link>
    </nav>
  );
}

export default NavBar;
