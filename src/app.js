import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>JSX by webpack and included babel loader</p>;

ReactDOM.render(template, document.getElementById('app'));

//
//
// const l = (x) => console.log(+x, x);
//
// import validator from 'validator';
//
// console.log(validator.isEmail('bratvogel@fff.de'));
// console.log(validator.isEmail('@BLARGELGARGEL.ss'));
//
// console.log(validator.isEmail('tetstest+dddd.ss'));
//
//
//
//
// import isSenior, { isAdult, canDrink } from './person.js';
//
// console.log("isAdult(18)", isAdult(18));
// console.log("canDrink(18)", canDrink(18));
// console.log("isSenior(108)", isSenior(108));
//
//
//
// import subtract, { square, add } from './utils.js'
//
// console.log('square', square(8));
// console.log('add', add(44,4));
// console.log('subtract', subtract(10,6));
