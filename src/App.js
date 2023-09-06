import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Header />
      <div className="app--container">
        <input value={inputValue} type="text" placeholder="" />
        <button>Add</button>
      </div>
    </>
  );
}

export default App;
