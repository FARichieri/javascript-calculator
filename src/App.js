import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [input, setInput] = React.useState('0')

  return (
    <div className='calculatorContainer'>
      <div className='calculator'>
        <div id='display' className='outputContainer'>
          <div className='output'>
            {input}
          </div>
        </div>

        <div className='keys'>
          <button id="clear">AC</button>
          <button id="divide">/</button>
          <button id="multiply">*</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="substract">-</button>
          <button id="four">4</button>
          <button id="six">6</button>
          <button id="five">5</button>
          <button id="add">+</button>
          <button id="one">1</button>
          <button id="three">3</button>
          <button id="two">2</button>
          <button id="equals">=</button>
          <button id="zero">0</button>

          <button id="decimal">.</button>

        </div>

      </div>  
    </div>
  );
}

export default App;
