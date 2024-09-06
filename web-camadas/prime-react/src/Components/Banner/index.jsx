import PropTypes from "prop-types";

import "./banner.css";

const Banner = ({ 
    titulo, 
    subTitulo, 
    textoComentario 
  }) => {
  return (
    <div className="banner">
      <h1>{titulo}</h1>
      <h2>{subTitulo}</h2>
      <p>{textoComentario}</p>
    </div>
  );
};

// Definir os tipos e requisitos das props
Banner.propTypes = {
  titulo: PropTypes.string.isRequired,
  subTitulo: PropTypes.string.isRequired,
  textoComentario: PropTypes.string.isRequired,
};

export default Banner;
