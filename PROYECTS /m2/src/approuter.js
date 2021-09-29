/* import React from "react";
import {
  NavLink,
  Link,
  Redirect,
  Route,
  useParams,
  useHistory,
  Prompt,
} from "react-router-dom";

function App() {
  //el path indica a que ruta el componente va a reaccionar , pero todas las rutas empiezan con barra ,para que sea exacto le pongo la palabra
  return (
    <div>
      <Route path="/">
        <Nav />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/c" exact>
        <Redirect to="/a" />
      </Route>
      <Route path="/a">
        <ComponentA />
      </Route>
      <Route path="/a/:id" component={ComponenteAP} />

      <Route path="/b">
        <ComponenteB />
      </Route>
    </div>
  );
}

// Link me lleva a cada cada pagina
function Nav() {
  return (
    <div>
      <NavLink to="/">Ir a la Home</NavLink>
      <br />
      <Link to="/a">Ir a la pagina 'a'</Link>
      <br />
      <NavLink activeStyle={{ color: "red" }} to="/b">
        Ir a la pagina 'b'
      </NavLink>
    </div>
  );
}

function Home() {
  return <h1>HOME</h1>;
}

function ComponentA() {
  return (
    <>
      <h2>Componente A</h2>
      <Prompt when={true} message="are you sure you want to leave" />
    </>
  );
}

function ComponenteAP() {
  const { id } = useParams();
  const { push } = useHistory();

  React.useEffect(() => {
    if (id === "10") {
      push("/");
    } else {
      alert("el id de la ciudad es " + id);
    }
  }, [id, push]); //la dependencia id
  return <h2>Componente P</h2>;
}
function ComponenteB() {
  return (
    <>
      <h2>Componente B</h2>
      <Link to="/b/1">Ir a la pagina 'b1'</Link>
      <br />
      <Link to="/b/2">Ir a la pagina 'b2'</Link>
      <br />

      <Route path="/b/1">sub componente 1</Route>
      <Route path="/b/2">sub componente 2</Route>
    </>
  );
}

export default App;
 */