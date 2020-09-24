import React,  { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateCalculator from './calculatorComponants/others/calculator';


function App() {

  const [result, setResult] = useState("");

  return (
    <div className="App">
       <CreateCalculator result = {result} setResult ={setResult}/>
    </div>
  );
}

export default App;
