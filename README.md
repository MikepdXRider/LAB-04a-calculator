# LAB-04a-calculator

## HTML Elements
- 2 x <input>
    - User can input two numbers they want the website to calculate.
- A <p> tag for the operators(+, -, /, *)
    - Communicates math to user.
- a <p> tag for the output/result.
    - Communicates calculated result.
- 4 x button: +, /, *, and -.
    - Tells website which operator to use when calculating.

## Events
- User inputs no numbers and clicks an operator button.
    - Expected: No result.
- User inputs one number and clicks an operator button.
    - Expected: No result.
- User Inputs two numbers:
    - User clicks operator button.
        - Expected: 
            - JS injects the user selected operator into the operator <p> tag in html file.
            - JS performs calculation on the two inputs using the user selected operator.
            - JS injects calculated result into the output/result <p> tag in html file. 
- Use `console.log()` to validate all steps.


