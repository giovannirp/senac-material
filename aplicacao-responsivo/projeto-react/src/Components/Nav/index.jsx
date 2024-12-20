import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sobre">Sobre</a>
        </li>
        <li>
          <a href="usuarios">Usuários</a>
        </li>
        <li>
          <a href="listPeople">Lista</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
