import useSwitch from "./useSwitch"
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";

//Snack1

// function App() {
//   const [isOn, toggle] = useSwitch();

//   return (
//     <>
//       <div>
//       <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
//       <button onClick={toggle}>Cambia Stato</button>
//       </div>
//     </>
//   )
// }

//Snack 2

// function App() {
//   const currentDate = useDate();

//   return (
//     <div>
//       <h1>Data e ora attuali:</h1>
//       <p>{currentDate.toLocaleString()}</p>
//     </div>
//   );
// }

//Snack 3 

function App() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}


export default App
