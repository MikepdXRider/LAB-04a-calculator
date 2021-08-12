// IMPORT MODULES under test here:
import { add } from '../app.js';
import { subtract } from '../app.js';
import { multiply } from '../app.js';
import { divide } from '../app.js';

const test = QUnit.test;

// Addition
test('Should take in 5 and 5 and return 10', (expect) => {

    const expected = 10;
   
    const actual = add(5, 5);
    
    expect.equal(actual, expected);
});

// Subtraction
test('Should take in 15 and 5 and return 10', (expect) => {

    const expected = 10;
   
    const actual = subtract(15, 5);
    
    expect.equal(actual, expected);
});

// Multiplication
test('Should take in 2 and 5 and return 10', (expect) => {

    const expected = 10;
   
    const actual = multiply(2, 5);
    
    expect.equal(actual, expected);
});

// Division
test('Should take in 20 and 2 and return 10', (expect) => {

    const expected = 10;
    
    const actual = divide(20, 2);
    
    expect.equal(actual, expected);
});


