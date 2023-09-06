import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  // State for input value and array of items
  const [inputValue, setInputValue] = useState("");
  const [arr, setArr] = useState([]);

  // Function to handle input change
  const changeInput = (event) => {
    setInputValue(event.target.value);
  };

  // Function to add a new item to the array
  const clickButton = () => {
    // Create a new object with an incremental ID (necessary for delete a specific element on the list)
    let newObj = {
      id: arr.length + 1,
      name: inputValue,
    };
    // Add the new object to the array
    setArr([...arr, newObj]);
    // Reset the input
    setInputValue("");
  };

  return (
    <>
      <Header />
      <div className="app--container">
        <div className="input-btn--container">
          <input
            value={inputValue}
            onChange={changeInput}
            type="text"
            placeholder=""
          />
          <button onClick={clickButton}>+</button>
        </div>

        {/* The list */}
        <div className="list">
          {arr.map((x) => (
            <div className="list-item">{x.name}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
