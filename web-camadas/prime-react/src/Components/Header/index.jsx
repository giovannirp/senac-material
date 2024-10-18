import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/contato">Contatos</Link>
      <Link to="/pessoas">Pessoas</Link>
    </header>
  );
}