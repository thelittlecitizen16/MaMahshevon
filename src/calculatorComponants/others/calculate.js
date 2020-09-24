import React, { useState } from 'react';
import Text from '../others/TextBox'
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'

let array = [];

function Calculate(value, setResult) {

  console.log(value);
  
  let expression = array.join("")
  
  if (value ==='=')
  {
    console.log("=");
    console.log(evaluate(expression));
    array.push(value);
    array.push(evaluate(expression));
    expression = array.join("");
   setResult(expression);
  }
  else if(value ==='clear')
  {
    array=[];
    expression = array.join("");
   setResult(expression);
  }
  else{
    array.push(value);
    expression = array.join("");
   setResult(expression);
  }
}

export default Calculate;
