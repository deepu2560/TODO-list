import { useState } from "react";
import "./App.css";
import { LoginSignup } from "./Components/Pages/loginSignup";
import { Navbar } from "./Components/Pages/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <LoginSignup />
    </div>
  );
}

export default App;
