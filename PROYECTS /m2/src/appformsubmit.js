// import React from "react";

// function App() {
//   // que pasa si con el mismo estado quiero tener mas de un input >?
//   const [data, setData] = React.useState({
//     uno: "",
//     dos: "",
//   });

//   function handleOnChange(e) {
//     //console.log(e.target.name)
//     setData((preData) => {
//       return {
//         ...preData,
//         [e.target.name]: e.target.value,
//       };
//     });
//   }

//   function handleOnSubmit(e) {
//     e.preventDefault();
//     console.log(data);
//   }

//   return (
//     <form onSubmit={handleOnSubmit}>
//       <input value={data.uno} onChange={handleOnChange} name="uno" />
//       <input value={data.dos} onChange={handleOnChange} name="dos" />
//       <button type="submit">OK</button>
//     </form>
//   );
// }

// export default App;
