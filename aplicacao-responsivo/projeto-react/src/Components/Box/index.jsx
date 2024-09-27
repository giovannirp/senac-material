import React from "react";

import "./box.css";

export default function Box(props) {
  console.log(props)
  return (
    <div className="container-box">
      <img src={props.imagem} alt="Exemplo" className="image" />
      <h1 className="title-box">{props.title}</h1>
      <p className="description">
        {props.description}
      </p>
    </div>
  );
}
