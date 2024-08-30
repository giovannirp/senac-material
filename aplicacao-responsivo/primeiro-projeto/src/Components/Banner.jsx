import React from 'react'

export default function Banner(props) {
    console.log(props.children)

    /*  O children permite que você passe e renderize
     conteúdo dinâmico dentro de um componente em React */
    
      return (
        <div className="bannerStyle">
          {props.children}
        </div>
      );
}
