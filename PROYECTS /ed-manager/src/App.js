import React from "react";
import { Provider } from "react-redux";
import  Store  from "./store.js";
import  Players from "./components/Players.jsx"
import Selectedteam from "./components/Selectedteam.jsx";

//provider es un componente

const App = () => {
  return (
    <Provider store= {Store}>
      <main>
      
        <h1> EL BOCA DE BATTAGLIA </h1>
        <Players />
        <Selectedteam />
      
      </main>
    </Provider>
  );
};
export default App;
//cmd+x

//npm install redux react-redux
