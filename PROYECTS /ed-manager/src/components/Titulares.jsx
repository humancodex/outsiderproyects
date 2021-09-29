import React from "react";
import { connect } from "react-redux";

function Titulares({ titulares ,quitarTitular}) {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {titulares.map( j => (
          <article className="Titular" key ={j.id}>
            <div>
              <img src={j.nombre} alt={j.foto} />
              <button onClick={() => quitarTitular(j)}>X</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
quitarTitular(jugador){
  dispatch({
    type: "QUITAR_TITULAR",
    jugador,
  })
}

});



export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
