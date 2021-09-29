import React  from 'react';
//puedes hacerle desctructuring , depende de vos 
/* class Componente extends React.Component{
render(){
    return <h2>{this.props.msg}</h2>;
}
} */
//componente basado en clases 

/* function Componente(props){
    return <h1>{props.msg}</h1>;
} */

//componente funcional



const Componente =(props ) => <h2>{props.msg}</h2>;

//version ecms6  

export default Componente;