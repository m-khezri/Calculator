import {printToDom} from './helpers/util.js';




const multiply = (n1, n2) => {
    return n1 * n2;
};




const calculate = (num1, num2, mathType) => {

let answer = 0;

 switch (mathType){

     case 'multiply':
     answer = multiply(num1, num2);
     break;

     case 'divide':
     answer = num1 / num2;
     break;

     case 'add':
     answer = num1 + num2;
     break;

     case substract:
     answer = num1 - num2;
     break;

     default:
     'nope';
 }
printToDom(answer, 'result');

};


calculate(4, 2, 'multiply'); //8
