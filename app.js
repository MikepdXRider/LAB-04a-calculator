import { add } from './utils.js';
import { subtract } from './utils.js';
import { multiply } from './utils.js';
import { divide } from './utils.js';

// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


// CACHE
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const operatorArea = document.getElementById('operator-area');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const timesButton = document.getElementById('timesButton');
const divideButton = document.getElementById('divideButton');
const resultArea = document.getElementById('result-area');


// //EVENT LISTENERS
plusButton.addEventListener('click', () =>{
  resultArea.textContent = add(Number(input1.value), Number(input2.value));
  operatorArea.textContent = '+';
});

minusButton.addEventListener('click', () =>{
  resultArea.textContent = subtract(Number(input1.value), Number(input2.value));
  operatorArea.textContent = '-'; // Works
});

timesButton.addEventListener('click', () =>{
  resultArea.textContent = multiply(Number(input1.value), Number(input2.value));
  operatorArea.textContent = '*'; // Works
});

divideButton.addEventListener('click', () =>{
  resultArea.textContent = divide(Number(input1.value), Number(input2.value));
  operatorArea.textContent = '/';
});
