// console.log('hello');

// var message ='hello world';
// var age=18;
// age="done";
// console.log(age);
// console.log(message);
// message='else';         //hoisting
// console.log(message);

// // function env(){
// //     console.log(message)

// // }
// let message1 ="hello !"
// console.log(message1);
// const message2="hello";
// message2="else"; // constamt ko again initialize nahi kar sakte hai (doesn't rinitialize)
// console.log(message2); //by dafault var le leta hai


// let age ='abcd';
// age='abcxyz'              // error aayega. ager change nhito  huua gya to mutability agr ho gya to immutability
// console.log(typeof(age));

// javascript has 8 datatypes 
// string number boolean bigint

// let arr=['a','b','c','d'];
// arr[0]="abcd";
// console.log(arr);

// let str = '12';
// let age = 20;
// // let ans=str+age;
// // console.log(ans);
// let ans =  str + age ;
// console.log(ans);

// let a='12';
// let b=12;
// if(a==b){
//    console.log('yes');// document.write('yes');// isse browser pr run hota hai 
// }
// else{
//     console.log('no');
// }

// if(a===b){
//     console.log('yes again');
// }
// else {
//     console.log('no again');
// }

// let x= ['a','b','c','d'];
// let cpy =[a];
// if(a==cpy){
//      console.log('1.yes');
// }
// else{
//     console.log('1.no');
// }
// if(a===cpy){
//     console.log('2.yes');
// }
// else{
//    console.log('2.no');
// }

// const str1='ankit';
// const names ='my name is: ';
// const ans1=names + str1;
// //const ans1 = '${names} ${str1}' ; // issse bhi ham print kar sakte hai 
// console.log(ans1);

// function print(str){
//     console.log(str);
// }
// //const s='hello';
// print("hello"); // printt(); karne par undefined print hota hai
// function sum(a,b){
//     if(a && b){
//         console.log(a+b);
//     }
//     else{
//         console.log(a);
//     }
//    // console.log(a+b); // NaN
// }
// sum(10);
// let a=5; // when a=0 then print "no"
// if(a){
//     console.log("yes")
// }
// else {
//     console.log("no");
// }

// const a = function print(){
//      console.log("---");
// }
 
//  const b = function print(){
//     console.log("---");

//  }

//  const c = function print(){
//      console.log("----");
//  }
// print();

//  console.log("heelo");
// //  let c=()=.{
// //     console.log("----");
// //  }
// //  c();

// let a=3;
// switch(a)
// {
//     case 1:{
//              console.log("one");
//     }
//     case 2: {
//             console.log("two");
//     }
//     case 3:{
//         console.log("3");
//        // break;
//     }
//     default : {
//         console.log(" not 1 2 3");
//     }
// }

// const obj=new Object();
// obj[1] = "one";
// obj["name"] = "ankit";
// obj[2] = "two";
// console.log(obj);

// const obj={};
// obj[1] = "one",
// obj["name"] = "ankit",
// obj[2] = "two",
// console.log(obj);

// const obj = {
//     1: 'one',
//     'name': 'Ankit', // these are the method to initialize the object
//     12: 'twelve',
// };
// console.log(obj);

const obj={
    "firstName": "ankit",
    "lastName": "mishra",
};
const x=prompt("please tell the property to knpw ");
console.log(obj[x]);