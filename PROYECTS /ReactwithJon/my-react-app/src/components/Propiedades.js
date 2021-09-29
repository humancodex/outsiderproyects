import React from "react";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>  
        <li>{props.numero}</li>  
        <li>{props.booleano}</li>  
        <li>{props.objeto.nombre + ' , '+ props.objeto.subname}</li>  
        <li>{props.arreglo.join(' / ')}</li>  
        <li>{props.elementoReact}</li>  
        <li>{props.arreglo.map(props.function).join(' ,')}</li>  
        <li>{props.reactComponent}</li>  
      </ul>
    </div>
  );
}

/* Propiedades.defaultProps ={
    porDefecto: 'LasProps'
}
 */

//internamente puedes recibir propiedades por defecto 


//puedo definir que ciertas props se inicializen con un prop definido u otro por defecto para ello importo npm install -s prop-types
//estas prop types me permite definirle a mi componente un atributo que se llame proptypes y en el definir las caracteristicas que necesito soporte de mis propiedades 
//buscar todo en la pagina de NPM ahi me dice como usarlo 

//propiedades.propTypes = { numero: PropTypes.number,} esta propiedad solo va a recibir numeros 
//propiedades.propTypes = { numero: PropTypes.number.isRequired,} esta propiedad solo va a recibir numeros si no la pongo me da otro warning , recibir cierto valor o validacion con PropTypes 