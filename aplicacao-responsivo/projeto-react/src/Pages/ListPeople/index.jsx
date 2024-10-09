import React, { useState } from "react";
import "./style.scss"

export default function ListPeople() {
      // Lista de pessoas (objetos)
  const people = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
  ];

  // Estado para armazenar o texto do filtro
  const [filterText, setFilterText] = useState("");

  // Função de filtro
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <div className="container container-filter">
      <h1>Filtro de Pessoas</h1>
      {/* Input de busca */}
      <input
        type="text"
        placeholder="Digite um nome..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {/* Lista de pessoas filtradas */}
      <ul>
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person) => <li key={person.id}>{person.name}</li>)
        ) : (
          <li>Nenhuma pessoa encontrada</li>
        )}
        
        <button onClick={() => setFilterText('')}>Limpar Filtro</button>

      </ul>
    </div>
  );
}
