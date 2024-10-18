import React, { useState } from 'react'
import "./form.css";

export default function Form() {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Nome enviado:", name);
      setName('')
    };

  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">Nome: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
    <button type="submit">Enviar</button>
  </form>   
  )
}
