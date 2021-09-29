import React from "react";
import { connect } from "react-redux";

function Players({ jugadores, agregarTitular, agregarSuplente }) {
  return (
    <section>
      <h2>JUGADORES</h2>
      <div className="contenedor">
        {jugadores.map((j) => (
          <article className="Jugador" key={j.id}>
            <img src={j.foto} alt={j.nombre} />
            <h3>{j.nombre}</h3>
            <div>
              <button onClick={() => agregarTitular(j)}>Titulares</button>
              <button onClick={() => agregarSuplente(j)}>Suplentes</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  jugadores: state.jugadores,
});

const mapDispatchToProps = (dispatch) => ({
  agregarTitular(jugador) {
    dispatch({
      type: "AGREGAR_TITULAR",
      jugador,
    });
  },

  agregarSuplente(jugador) {
    dispatch({
      type: "AGREGAR_SUPLENTE",
      jugador,
    });
    
  }

  //estas funciones son las encargadas de llevar las acciones que van a ser leidas por mi reducer para poder cambiar el estado
});
export default connect(mapStateToProps, mapDispatchToProps)(Players);

//conectamos jugadores a la base de datos que seria store , conecta el componente a nuestro store
