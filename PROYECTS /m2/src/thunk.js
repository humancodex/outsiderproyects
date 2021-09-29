
//ESTAS EN STORE.JS


// import { createStore, applyMiddleware, compose } from "redux";
// import reduxThunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const INCREMENT = "INCREMENT";
// const SET_LOADING = "SET_LOADING";
// //PONE TODO JUNTO PERO YO DEBERIA TENER UN ARCHIVO PARA NOMBRES OTRO PARA STORE

// export function increment() {
//   return {
//     type: INCREMENT,
//     isloading: false,
//   };
// }
// export function incrementAsync() {
//   return (dispatch) => {
//     dispatch({
//       type: SET_LOADING,
//       value: true, //cuando incremento de manera asincrona despacho que el loadign pase a true
//     });
//     setTimeout(() => {
//       dispatch(increment());
//       dispatch({ type: SET_LOADING, value: false });
//     }, 1500);
//   };
// }

// //el middleware se ejecuta antes en medio de la ejecucion , como es una funcion , la llama y le pasa el dispatch como quiera , entonces uso el incremento en este caso, como el dispatch devuelve un objeto lo deja pasar , lo intercepta antes de llegar al reducer

// //el FETCH SE PUEDE HACER DENTRO DEL DISTPATCH(APIS)

// //esto va en el archivo actions

// const defaultState = {
//   count: 0,
// }; //ESTO ES STORE , VER CLASE DE AYER

// function reducer(state = defaultState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case SET_LOADING:
//       return { ...state, isloading: action.value };
//     default:
//       return state;
//   } //me creo lo referente en is loading para ponerlo en true o false
// }

// //ESTO DEBERIA ESTAR EN REDUCER

// const store = createStore(
//   reducer,
//   composeEnhancers(applyMiddleware(reduxThunk))
// );

// //npm install redux-thunk, ahora implemento el middleware para usar dev tools

// //REDUX THUNK para poder hacer funciones asincronas , una accion siempre es de tipo objeto pero con redux thunk me deja recibir acciones que no son objetos para pedir informacion a una api

// /* const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ); */

// //aqui activo redux devtools

// export default store;

// //redux Thunk me ayuda a hacer request a una accion que sea asincrona , para comunicarme con apis tmbn utilizando redux
