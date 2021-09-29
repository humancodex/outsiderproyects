import React from "react";
import {connect,useSelector} from "react-redux"
import Buttons from "./Buttons.js";
// import {increment} from "./store"

//en realidad se hace desde un documento actions.js



//al traerme el connect puedo usar el dispatch para ejecutar acciones(increment())

//todo lo que comienza con use , es un HOOK 


function App() {
const count = useSelector( (state) => state.count);
const isLoading = useSelector(( state) => state.isloading);

  return (
<div> 
{isLoading? (
   <h1>Cargando...</h1>
   ):(
     <>
 <span>El contador es: {count} </span>
 <Buttons/>
 </>)}
  </div>
 
  );
   }



export default App;

//DIFERENCIA ENTRE USESELECTOR , USE dispatch
/* 
USE SELECTOR ME TRAE EL ESTADO (SUSCRIBE)
USE DISTPATCH (DESPACHA ) */




// function App(props) {

//   return (
//  <>
//  <span>El contador es: {props.count} </span>
//  <Buttons/>
//  </>
//   );
// }


// function mapStateToProps(state){
// return {
//   count: state.count
// }
// }


// export default connect(mapStateToProps)(App);


//si trabajo con connect hago el map 




//para conectar mis props con el count de store , hago la funcion mapstate to props
/* opcion 1 ()=>{props.dispatch(increment())}

opcion 2 ()=>{props.increment() , poniendolo en el export como objeto destructed , ya viene con el dispatch y se usa por props  }*/

//recibe el estado global, creo un mapa de lo que necesito





//solo necesitoel count , retorno un objeto con la propiedad count 

// como lo conecto? el map a mi componente a traves de un connect




//combine reducer , cada reducer quedaria como una propiedad dentro del estado 


//se llama la funcion que me va a llamar otra funcion que conecta y le invoco pasandole el componente que quiero conectar , recibe dos argumentos , lo relacionado al estado(mapstate,{increment})(APP)

//cada componente que requiera algo del estado global , usa el connect 

//MAP Y CONNECT VAN JUNTXS



//connect : conecta al componente , cualquier tipo , paso el map state que lleva las props dentro que voy a usar y el segundo argumento representa un dispatch 


