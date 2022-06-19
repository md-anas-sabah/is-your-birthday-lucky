import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    let dateString = date.replace(/-+/g, "");
    let sum = 0;
    for (let letter of dateString) {
      sum += Number(letter);
    }
    if (sum % number === 0) {
      setText("Yayyy!! Your birthdate is luckyyy 🤩🤩🤩");
    } else {
      setText("Ooops!!! your birthdate isn't lucky🙄🙄😶");
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h2>Is your birthday lucky?</h2>
      </header>

      <div className="app_body">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          value={number}
          placeholder="Enter your lucky number...."
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={clickHandler}>
          Click Me <span>👆🏻</span>
        </button>
        <p className="result">{text}</p>
      </div>
    </div>
  );
}

export default App;
