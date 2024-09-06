import React, { useState } from 'react';

const Aumentar = () => {
  // Inicializa o estado com o valor 0
  const [statue, setStatue] = useState(0);

  // Função para aumentar o valor do estado
  const aumentar = () => {
    setStatue(statue + 1);
  };

    // Função para diminuir o valor do estado
    const diminuir = () => {
      setStatue(statue - 1);
    };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{statue}</h1>
      <button onClick={aumentar} style={{ marginRight: '10px' }}>Aumentar Statue</button>
      <button onClick={diminuir} >Diminuir</button>
    </div>
  );
};

export default Aumentar;