import React, { useState } from 'react';

const Aumentar = () => {
  // Inicializa o estado com o valor 0
  const [count, setCount] = useState(0);

  // Função para aumentar o valor do estado
  const aumentar = () => {
    setCount(count + 1);
  };

    // Função para diminuir o valor do estado
    const diminuir = () => {
        setCount(count - 1);
    };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={aumentar} style={{ marginRight: '10px' }}>Aumentar Statue</button>
      <button onClick={diminuir} >Diminuir</button>
    </div>
  );
};

export default Aumentar;