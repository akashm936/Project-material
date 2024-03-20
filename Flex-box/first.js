// const Instagram = {
//     name: "Akash Morwal",
//     followers : 192,
//     about : "I am a Engineer",
//     follow: true,
// }

// let a = 5;
// let b = 6;

// console.log("a + b =", a+b)
// console.log("a * b =", a*b)
// console.log("a - b =", a-b)
// console.log("a / b =", a/b)
// console.log("a % b =", a%b)
// console.log("a ** b =", a**b) //5^6
// console.log("a ++  =", ++a) //5^6
// console.log("a --  =", --b) //5^6

// console.log(Instagram);

// let age = 25;

// if (age > 18){
//    console.log("you can drive a car");
// }
// else{
//     console.log("You cannot drive a car");
// }
//even old numbers program

// let num = 22;

// if (num % 2 === 0 ) {
//     console.log(num, "the number is even")
// }
// else{
//     console.log(num, "the number is old")
// }

// let age = 30;

// let result = age >= 25 ? "you can drink" : "you can not drink";

// console.log(result)

// let num = prompt("Enter your number");

// if ( num % 5 === 0){
//     console.log(num,"the number is multiply by 5")
// }
// else{
//     console.log(num,"the number is NOT multiply by 5")
// }

// let marks = prompt("enter student marks");

// if(marks >= 90 && marks <=100){
//     console.log("Student is pass with A++ grade");
// }
// else if(marks >=70 && marks <= 89){
//     console.log("Student is pass with A+ grade");
// }
// else if(marks >=50 && marks <= 69){
//     console.log("Student is pass with B+ grade");
// }
// else if(marks >=33 && marks <= 49){
//     console.log("Student is pass with B grade");
// }
// else{
//     console.log("the student is fail");
// }
//##############################################################################
//10/02/2024

// const Laptop = {
//     name : "Inpiration",
//     company : "DELL",
//     OS : "Windows os",
//     Processor : "intel i3",
//     price : 47500,
//     anitivirus : "NP",
//     Biometric : false,
//     Camera : true,
// }

// console.log(Laptop);

//##############################################################################
//10/02/2024

//practice problem

// let budget = prompt("Enter the your Budget");
// let mobile_phone;

// if( budget >= 150000 && budget <= 300000){
//     console.log("you'r budget is",budget,"You can purchase this phone")
//     console.log("Iphone 14 PRO MAX");
//     console.log("Samsung S24 Ultra");
// }
// else if(budget >=100000 && budget <= 149000){
//     console.log("You'r budget is",budget,"You can purchase this phone");
//     console.log("Iphone 15 plus");
//     console.log("Samsung S23 Ultra");
// }
// else if(budget >=70000 && budget <= 99000){
//     console("You'r budget is",budget,"You can purchase this phone");
//     console.log("Iphone 14 plus");
//     console.log("Samsung S24");
// }
// else if(budget >=40000 && budget <= 69000){
//     console.log("You'r budget is",budget,"You can purchase this phone");
//     console.log("Samsung Galaxy S23 FE");
//     console.log("Samsung Galaxy S9+")
// }
// else if(budget >= 10000 && budget <= 39000){
//     console.log("you'r budget is",budget,"you can purchase this mid Range Phone");
//     console.log("Samsung A54 5G");
//     console.log("Redmi Note 13 Pro+");
//     console.log("realme 7");

// }
// else if(budget >= 1000 && budget <= 9900){
//     console.log("you'r budget is",budget,"you can purchase this low range phone");
//     console.log("Samsung M04");
//     console.log("realme narzo N53");
// }
// else{
//     alert("this budget is not for smart phone");
// }

//############################################################
// for loop for print the value

// for(let i=1; i<=10; i++){
//     console.log("i is the",i);
// }

// console.log("Match is End");

//for loop for logical calculation

// let sum = 0;
// let n = 100 ;

// for (let i=0; i <=n; i++){
//   sum = sum + i;
// }

// console.log(sum);

// While loop

// let i = 1;

// while( i <= 10){

//     console.log("I am Akash");
//     i++;
//     console.log(i);
// }

// let i = 1;
// do{
//     console.log("My name is akash",i);
//     i++;
// }while(i <= 10);

//for of loop

// let str = "inscyclopidiya";

// let size = 0;

// for (let i of str){
//     console.log("i = ",i);
//     size++;
// }

// console.log("String Size is", size);
// for in loop this loop is for array and object

// let student = {
//     name: "Akash Morwal",
//     age: 24,
//     cgpa: 6.43,
//     isPass: true,
// };

// for(let key in student){
//     console.log("key =", key, "value =",student[key]);
// }

// for(let i= 0;i<=100;i++){
//   if(i%2===0){
//     //even number condition in javascript
//     console.log("even num =",i);
//   }

// }

// for(let i= 0;i<=100;i++){
//     if(i % 2 !== 0){
//       //odd number condition in javascript
//       console.log("odd num =",i);
//     }

//   }

//# Practice quation 2

// let gameNum = 25;
// let userNum = prompt("Guess the game Number :"(0 - 100));

// while(userNum != gameNum){
//     userNum = prompt("You enter the wrong Number , please try again");
// }
// alert("Congratulation, You Guess the right Number");

//##########  13/02/2024    ##############

// let str = "Akash\nMorwal";

// console.log(str);

//# practice quation 2
// let fullName = prompt("Enter your name");

// let username = "@" + fullName +fullName.length;

// console.log(username);

//# Array

// let marks = [94, 85, 76, 45, 89];
// console.log(marks);

// let hero = ["spiderman", "superman", "shaktiman", "badman", "hulk", "antman", "IronMan"];
// // console.log(hero);

// for(let idk=0; idk<hero.length; idk++ ){
//     console.log(hero[idk]);
// }

//###################################   14-02-2024 ############################################

// let cities = ["Mumbai","Pune","Chh. Shambhajinagar","Jalna","Nagpur"];

// for( let city of  cities){
//     console.log(city);
// }

//#################################### 14-02-2024 #########################################

// let marks = [87,89,56,59,95,49,74];

// let sum = 0;

// for(let val of marks){

//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`the avarage marks of class = ${avg}`);

//######################################### 14-02-2024 #####################################

// let item = [350,550,480,80,250]

// console.log(item);
// for(let i=0;i<item.length;i++){
//     let offer = item[i] / 10;
//     item[i] -= offer;
// }

// console.log(item);

//#################################### 18/02/2024 ################################

// let foodItem = ["chips", "jelebi", "fafda", "samosa","kachori"]

// let marks = [89,56,78,85,90]

// foodItem.push("bhakarvadi");
// deletedItem = foodItem.pop();

// marksprint = marks.toString();

// console.log(foodItem);
// console.log(deletedItem);
// console.log(marks)
// console.log(marksprint);

//################################## 19/02/2024 #############################################

// function sum(a , b){
//     return(a + b)
// }

// const arraysum = (a, b) =>{
//     console.log( a + b)
// }

// // console.log(arraysum(5,8));

// const arraymul = (a, b) => {
//     console.log(a * b)
// }

// function countVovals(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         count++;
//       }
//     }
//     console.log(count);
// }
let arr = [56, 63 ,60, 98, 78]


arr.map((val) => {
    console.log(val)
})