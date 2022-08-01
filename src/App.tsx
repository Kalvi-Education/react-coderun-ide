import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Ide from "./Ide";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">{/* <Ide height="1600" width="1600" /> */}</div>;
}

export default App;
