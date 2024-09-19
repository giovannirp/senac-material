import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Página Não Encontrada</h1>
      <p className="notfound-text">
        A página que você está procurando não existe.
      </p>
      <Link to="/" className="notfound-link">
        Voltar para Home
      </Link>
    </div>
  );
}
