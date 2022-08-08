/* eslint-disable no-new-func */
import { useState } from 'react'
import Header from "./components/Header/Header";
import Screen from "./components/Screen/Screen";
import Keypad from "./components/Input/Keypad";

const App = () => {
  const [display, setDisplay] = useState('');
  const [calc, setCalc] = useState([]);

  const setTheme = (theme) => {
    localStorage.setItem('calc-theme', theme);
    document.documentElement.className = theme;
  }

  // Set theme to that in local storage or default to theme 1
  const initTheme = () => {
    if (localStorage.getItem('calc-theme')) {
      const theme = localStorage.getItem('calc-theme');
      setTheme(theme);
    } else {
      setTheme('theme-1');
    }
  }

  // Add the input to the display and current calculation
  const addInput = (input) => {
    setDisplay(display.concat(input));
    setCalc(calc.concat(input));
  }

  const reset = () => {
    setDisplay('');
    setCalc([]);
  }

  // Append the input to the display and current calculation
  const handleInput = (input) => {
    if (typeof input === 'number') {
      addInput(input)
    }
    
    if (typeof (calc[calc.length-1]) === 'number') {
      if (input === 'x') {
        setDisplay(display.concat('x'));
        setCalc(calc.concat('*'));
        return;
      }

      addInput(input);
    }
  }

  // reset: Clear the display and current calculation
  // del: Remove the last added input
  const handleFunc = (func) => {
    if (func === 'reset') {
      reset();
    }

    if (func === 'del') {
      setDisplay(display => display.slice(0, -1));
      setCalc(calc.slice(0, -1));
    }
  }

  // Evaluate the expression in 'calc' and display the result
  const handleOutput = () => {
    try {
      const expression = calc.join('');
      let result = Function(`'use strict'; return ${expression}`)();
      
      if (result === Infinity) {
        result = 'Cannot divide by zero'; 
      }

      reset();
      setDisplay(result.toString());
      setCalc([result])

    } catch (err) {
      return;
    }
  }

  initTheme();
  
  return (
    <main>
      <div className="container">
        <div className="calculator">
          <Header toggleTheme={setTheme}/>
          <div className="calculator-main">
            <Screen display={display}/>
            <Keypad 
              handleInput={handleInput} 
              handleFunc={handleFunc} 
              handleOutput={() => handleOutput()}/>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/Isaiah-B">Isaiah</a>.
      </div>
    </main>
  )
}

export default App;
