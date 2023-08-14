import "./App.css";
import DArray from "./pages/DArray";
import DObject from "./pages/DObject";

function App() {
  // Swap items using destructuring
  return (
    <div className="App">
      <h3>Destrukturing Array</h3>
      <DArray />
      <h3>Destrukturing Object</h3>
      <DObject />
    </div>
  );
}

export default App;
