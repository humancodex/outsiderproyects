import React from 'react'

function EstadoAHijo (props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

export default class Estado extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            contador:0
            //va recibir props y llamo el constructor del objeto del cul hereda , super()
            //this.state , aqui llaya fijo el estado 
            // el cambio del estado genera un renderizado en el componente 
        }
     /*    setInterval(()=>{
            this.setState({
                contador:this.state.contador+1}) 
        },1000) */
    
    }// esto esta mejor porque contador ya esta declarada 
    //el ciclo de vida de un componente 
    //montado , actualizacion,desmontado 
    //el estado de un componente padre se le puede pasar a un componente hijo 
    //useState en componentes Funcionales 


    render(){
        return (
            <div>
                <h1>El State </h1>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}//le puse un hijo a su componente hijo 
// tanto cambios en el estado como cambios en las propiedades son las que nos estan generando un renderizado de los elementos del Dom 
