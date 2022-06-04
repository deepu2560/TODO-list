import { useState } from "react";
import "./App.css";
import { LoginSignup } from "./Components/Pages/loginSignup";
import { Todomain } from "./Components/Pages/todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Todomain />
    </div>
  );
}

export default App;
