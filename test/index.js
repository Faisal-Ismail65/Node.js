// 1.  Ways to print in JS

/*console.log("hello world");
  alert("alert message");
  document.write("this is document write");*/

// 2. JS Console API

/*console.log("hello world");
  console.warn("this is warning");
  console.error("this is an error")
  console.clear();
  console.assert(4==4);*/

// 3. primitive data types: undefined, null , number, string , boolean, symbol.
// 4. Referenfce data types : arrays and objects.
// var arr = [1, 2, 3, 4, 5];
// // console.log(arr);
// arr.forEach(function (item) {
//   console.log(item);
// })
// let date = new Date();
// console.log(date.getDate());
// console.log(date.getTime());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// let elem = document.getElementById('click')
// console.log(elem);
//  let elemClass= document.getElementsByClassName('container');
// // console.log(elemClass[1]);

// //elem.classList.add('bg-primary');
// elemClass[0].classList.add('bg-primary');
// // elemClass[0].classList.remove('bg-primary');
// clicked = () => {
//     console.log("the button was clicked");
// }
// window.onload = function () {
//   console.log("the document was loaded");
// }
// firstcontainer.addEventListener('click',function(){
//   console.log("clicked on container");
// })
// firstcontainer.addEventListener('mouseover',function(){
//   console.log("mouse over container");
// })
// firstcontainer.addEventListener('mouseout',function(){
//   console.log("mouse out container");
// // })
//  let prev = document.querySelectorAll('.container')[1].innerHTML;
//  firstcontainer.addEventListener('mouseup',function(){
//    document.querySelectorAll('.container')[1].innerHTML = prev;
//    console.log("mouse up container");
//  })
//  firstcontainer.addEventListener('mousedown',function(){
//   console.log("mouse down container");
//    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>";
//  })

// pageload = () => {
//   console.log("page is loaded");
// }
// setTimeout(pageload,5000);
// setInterval(pageload,1000);
//  obj  = {name :"faisal",length:1}
//  js= JSON.stringify(obj);
// console.log(js);
//console.log("hello world");

// last item in an array

// var name = "faisal";
// var lastword = name[name.length - 1];
// console.log(name);

// Scope of a variable 

// var myGlobal = 10;

// function fun1(){
//  let  oopsGlobal = 5;
// }
// function fun2(){
//   var output ="";

//   if(typeof myGlobal != "undefined"){
//     output += "myGlobal is: " + myGlobal;
//   }
//   if(typeof oopsGlobal != "undefined"){
//     output += "oopsGlobal is: " +oopsGlobal;
//   }
//   console.log(output);
// }
// fun2();

//  var outWear  = "t-shirt";
// function myOutfit(){
//     var outWear = "sweater";
//    return outWear;
// } 
// console.log(myOutfit());
// console.log(outWear);

// ternary operators and arrow functions

//example 1

// let checkequal = (a,b) => {
//     return a===b ? true: false;
// }
// console.log(checkequal(5,5));

// example 2
// let checksign = (num) => {
//   return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// }
// console.log(checksign(10));

// arrow functions
// var magic = () => new Date();

// console.log(magic());


// default parameters 

// const increment = (number, value = 1) => {
//       return number+value;
// }
// console.log(increment(5));

// multiple number of parameterss
// const sum = (...args) => {
//   return args.reduce((a,b) => a+b ,0);
// }

// console.log(sum(4,5,5));

// const AVG_TEMPERATURE = {
//   today: 77.5,
//   tomorrow:79
// }
// function gettempoftomorrow(avgtemperature) {
//   const {tomorrow : tempoftomorrow} = avgtemperature;
//   return  tempoftomorrow;
// }
// console.log(gettempoftomorrow(AVG_TEMPERATURE));

// const LocalForcast = {
//   today: {min :72 , max : 83},
//   tomorrow : {min : 73.3, max: 84.6}
// }

// const getmaxoftomorrow = (forcast) => {
//   const {tomorrow : {max : maxoftomorrow}} = forcast;
//   return maxoftomorrow; 
// }

// console.log(getmaxoftomorrow(LocalForcast));

// exchanging values using bracket notation

// const [a,b,c] = [1,2,3,4,5,6,];
// console.log(a,b,c);

// let x = 6 ,y = 10;

// [x,y] = [y,x];
// console.log(x,y)


// remove elements from array

// const source = [1,2,3,4,5,6,7,8];

// function removeitem (list) {
//   const [,,,,...arr] = list;
//   return arr;
// }
// console.log(source);
// console.log(removeitem(source));

// Destructuring 

// const createPerson = (name,age,gender) => {
//     return {
//       name:name,
//       age:age,
//       gender:gender
//     };
// };
// console.log(createPerson("faisal",23,"male"));

// const createPerson = (name,age,gender) => ({name,age,gender});
// console.log(createPerson("faisal",23,"male"));

// import connection from another js file.

//import {connection} from "./script";

  // const connection = require('./script');

  // connection.query('select * from department',(err,result)=> {
  //   if(err){
  //       return console.log(err);
  //   }else{
  //       return console.log(result);
  //   }
  // });



