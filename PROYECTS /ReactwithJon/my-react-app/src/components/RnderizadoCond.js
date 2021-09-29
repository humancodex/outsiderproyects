import React from 'react'

function Login(){
    return (
        <div>
            <h3> Login</h3>
        </div>
    )
}

function Logout(){
    return (
        <div>
            <h3> Logout</h3>
        </div>
    )
}
//esto deberia ir en un archivo independientte

export default class RnderizadoCond extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            session: true,
        }
    }
    render(){
    return (
      <div>
        <h2> renderizado </h2>
        {this.state.session?<Login />:
        <Logout />}
        
      </div>
    );
    }
}

//podria crearle una variable de estado en el componente de clase y dependiendo del estado me activa el log 
//el renderizado es cuando un valor del estado o de las propiedades de nuestro componente cambia y esto obliga a que la interfaz se re pinte 


