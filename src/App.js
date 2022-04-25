import './App.css';
import React from 'react';

function App() {
  const [input, setInput] = React.useState('')
  const [result, setResult] = React.useState('0')
  const [resultStorage, setResultStorage] = React.useState('0')

  function handleChange(e) {
    if (input.length < 29) {
      if (input === '' && e.target.value === '0') {
        return
      } else if (result.includes('.') && e.target.value === '.') {
          return
      } else if (input === '' && e.target.value === '.') {
          setInput('0.')
          setResult('0.')
      } else if (e.target.value === '.' && input.includes("=")) {
          setInput('0.');
          setResult('0.');
      } else if (input === '' || input.includes("=")) {
          setInput(e.target.value);
          setResult(e.target.value);
      } else if (result === '+') {
          setInput(input + e.target.value);
          setResult(e.target.value);
      } else if (result === '-') {
          setInput(input + e.target.value);
          setResult(e.target.value);
      } else if (result === '*') {
          setInput(input + e.target.value);
          setResult(e.target.value);
      } else if (result === '/') {
          setInput(input + e.target.value);
          setResult(e.target.value);
      } else {
          setInput(input + e.target.value)
          setResult(result + e.target.value)
      }
    } else {
      let prevVal = result;
      setResult('Digit Limit Met');
      setTimeout(() => setResult(prevVal), 1000);
    }
  }

  function handleClear() {
    setInput('')
    setResult('0')
  }

  function handleAdd() {
    let last = input[input.length - 1]
    let last2 = input[input.length - 2]
    if (input.includes('=')) {
      setInput(resultStorage + "+")
      setResult('+')
    } else if (last === '-' && last2 === '*') {
        setInput(input.replace('*-', '+'))
        setResult('+')
    } else if (last === '-') {
        setInput(input.replace('-', '+'))
        setResult('+')
    } else if (last === '*') {
       setInput(input.replace(last, '+'))
       setResult('+')
    } else if (last === '/') {
       setInput(input.replace(last, '+'))
       setResult('+')
    } else if (last !== '+') {
        setInput(input + '+')
        setResult("+");
    }
  }

  function handleSubtract() {
    let last = input[input.length -1]
    if (input.includes('=')) {
      setInput(resultStorage + "-")
      setResult('-')
    }  else if (last === '+') {
        setInput(input.replace('+', '-'))
        setResult('-')
    } else if (last !== '-') {
        setInput(input + '-')
        setResult("-");
    }
  }

  function handleMultiply() {
    let last = input[input.length -1]
    if (input.includes('=')) {
      setInput(resultStorage + "*")
      setResult('*')
    } else if (last === '-') {
        setInput(input.replace(last, '*'))
        setResult('*')
    } else if (last === '+') {
        setInput(input.replace(last, '*'))
        setResult('*')
    } else if (last === '/') {
        setInput(input.replace(last, '*'))
        setResult('*')
    } else if (last !== '*') {
        setInput(input + '*')
        setResult("*");
    }
  }

  function handleDivide() {
    let last = input[input.length -1]
    if (input.includes('=')) {
      setInput(resultStorage + "/")
      setResult('/')
    } else if (last === '-') {
      setInput(input.replace(last, '/'))
      setResult('/')
    } else if (last === '+') {
      setInput(input.replace(last, '/'))
      setResult('/')
    } else if (last === '*') {
      setInput(input.replace(last, '/'))
      setResult('/')
    } else if (last !== '/') {
        setInput(input + '/')
        setResult("/");
    }
  }

  function handleEqual() {
    if (result !== "0") {
      setInput(input + "=" + eval(input));
      setResult(eval(input).toString())
      setResultStorage(eval(input).toString());
    } else {
      setInput('')
    }
  }

  return (
    <div className='calculatorContainer'>
      <div className='calculator'>
        <div className='outputContainer'>
          <div className='input'>
            {input}
          </div>
          <div id='display' className='result'>
            {result}
          </div>
        </div>
        <div className='keys'>
          <button id="clear" onClick={handleClear}>AC</button>
          <button id="divide" onClick={handleDivide} value="/">/</button>
          <button id="multiply" onClick={handleMultiply} value="*">*</button>
          <button id="seven" onClick={handleChange} value={7}>7</button>
          <button id="eight" onClick={handleChange} value={8}>8</button>
          <button id="nine" onClick={handleChange} value={9}>9</button>
          <button id="subtract" onClick={handleSubtract} value="-">-</button>
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
          <p className='by'><a href="https://github.com/FARichieri" target="_blank" rel="noreferrer">By frichieri</a></p>
      </div>  
    </div>
  );
}

export default App;
