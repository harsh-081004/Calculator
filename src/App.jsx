import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [Result, setResult] = useState("");

  //clear all values
  const clear = () => {
    setResult("");
  };

  //handle number clicks
  const handleClick = (e) => {
    const value = e.target.name;
    setResult((prevResult) => prevResult + value);
  };

  //handle the actual operation
  const calculate = () => {
    try {
      const result = eval(Result);
      setResult(result.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  //remove last occurence of given one by one
  const remove = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };
  const toggleSign = () => {
    setResult((prevResult) => {
      const num = parseFloat(prevResult);
      if (isNaN(num)) {
        return prevResult;
      }
      return String(num * -1);
    });
  };

  return (
    <>
      <div className="cal">
        <h1>Calculator</h1>
        <form>
          <input type="text" value={Result} readOnly />
        </form>
        <div className="keys">
        <button name="Clear" onClick={clear}>
          C
        </button>
        <button name="remove" onClick={remove}>
          R
        </button>
        <button name="%" onClick={handleClick}>
          %
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <br />

        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="*" onClick={handleClick}>
          x
        </button>
        <br />

        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <br />

        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <br />

        <button name="togglesign" onClick={toggleSign}>
          +/-
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          ..
        </button>
        <button name="result" className="result" onClick={calculate}>
          =
        </button>
        </div>
        </div>
    </>
  );
};

export default App;
