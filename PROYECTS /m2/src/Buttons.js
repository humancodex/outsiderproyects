import React from "react";
import { useDispatch} from "react-redux";
import { increment ,incrementAsync,fetchuser} from "./store";


//esto es solo para funcionales, en el check es el connect 

function Buttons() {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >+
      </button>
      <button
        onClick={() => {
          dispatch(incrementAsync());
        }}
      >+ ASYNC
      </button>
      <button
        onClick={() => {
          dispatch(fetchuser(1));
        }}
      >+ FETCHUSER1
      </button>
    </div>
  );
}

export default Buttons;

//USE DISTPATCH SE COMUNICA CON EL PROVIDER, EL CUAL SOLICITA UN DISTPATCH DE LA STORE 





//ESTA ES LA FORMA ANTIGUA 


/* function buttons(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.increment();
        }}
      >+
      </button>
    </div>
  );
}

export default connect(null,{increment})(buttons); */

// esto funciona para componentes funcionales y de clase pero ojo , en los de clase va this.props   




//como conecto sin pasarle el map state to props?implementas el connect 
//si no quiero conectar , simplemente despachar (es un boton ), le pongo null 
//propiedades no quiero (null), simplemente el dispatch 
//si tuviese muchas acciones pasaria el objeto {increment,con todo lo que necesito}

//aca lo que hice fue un componente que lee el estado y este que despacha acciones , puede existir uno que solo consuma y solo despache 