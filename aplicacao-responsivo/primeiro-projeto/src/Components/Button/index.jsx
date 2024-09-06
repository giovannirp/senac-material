import React from 'react'
import "./botao.css";

export default function Button(props) {
    return (
        <button className="custom-button" onClick={props.onClick}>
          {props.text}
        </button>
      );
}
