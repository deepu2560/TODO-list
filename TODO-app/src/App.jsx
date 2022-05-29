import { useState } from "react";
import "./App.css";
import { LoginSignup } from "./Components/Pages/loginSignup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LoginSignup />
    </div>
  );
}

export default App;
