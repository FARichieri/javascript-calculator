import './App.css';
import React from 'react';

function App() {
  const [input, setInput] = React.useState('')
  const [result, setResult] = React.useState('0')
  const [sum, setSum] = React.useState('0')

  function handleChange(e) {
    if (input === '') {
        setInput(e.target.value);
        setResult(e.target.value);
    } else if (result === '+') {
      setInput(input + e.target.value);
      setResult(e.target.value);
    } else {
        setInput(input + e.target.value)
        setResult(result + e.target.value)
    }
  }

  function handleClear() {
    setInput('')
    setResult('0')
  }

  function handleAdd() {
    setInput(input + '+')
    setResult("+");
}

  function handleEqual(e) {
    setInput(input + "=" + eval(input));
    setResult(eval(input))
  }

  return (
    <div className='calculatorContainer'>
      <div className='calculator'>
        <div className='outputContainer'>
          <div id='display' className='input'>
            {input}
          </div>
          <div className='result'>
            {result}
          </div>
        </div>

        <div className='keys'>
          <button id="clear" onClick={handleClear}>AC</button>
          <button id="divide" onClick={handleChange} value="/">/</button>
          <button id="multiply" onClick={handleChange} value="*">*</button>
          <button id="seven" onClick={handleChange} value={7}>7</button>
          <button id="eight" onClick={handleChange} value={8}>8</button>
          <button id="nine" onClick={handleChange} value={9}>9</button>
          <button id="subtract" onClick={handleChange} value="-">-</button>
          <button id="four" onClick={handleChange} value={4}>4</button>
          <button id="five" onClick={handleChange} value={5}>5</button>
          <button id="six" onClick={handleChange} value={6}>6</button>
          <button id="add" onClick={handleAdd} value="+">+</button>
          <button id="one" onClick={handleChange} value={1}>1</button>
          <button id="two" onClick={handleChange} value={2}>2</button>
          <button id="three" onClick={handleChange} value={3}>3</button>
          <button id="equals" onClick={handleEqual} value="=">=</button>
          <button id="zero" onClick={handleChange} value={0}>0</button>

          <button id="decimal" onClick={handleChange} value=".">.</button>

        </div>
      </div>  
    </div>
  );
}

export default App;
