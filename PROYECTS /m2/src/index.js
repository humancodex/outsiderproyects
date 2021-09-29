import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store';


ReactDOM.render(
  <React.StrictMode>
   
   <Provider store={store}>
    <App />
   </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

//provider conecta mi aplicacion de react con una store de redux , le digo cual es la store que quiero que aplique 
// igual que el BrowserRouter envuelve a mi app , puedo poner los dos porque entre ellos no se afectan , esta es la llave para que se comuniquen 


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//siempre inyectar el browser router en el index PARA QUE QUEDE GLOBAL 
