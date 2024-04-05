// // // console.log("hello world!");
// // //  let str1 = new String("ankkit");
// // //  let str2 = "ankkit";
// // //  console.log(str1==str2); // i.e. both are equal


// // //    let obj={    // age yaha const kar denge to 14 to 17 line error dega 
// // //     name: "ajay",
// // //     lastname:"pandey"
// // //    }
// // //    console.log(obj);
// // //    obj.age=20;
// // //    console.log(obj);  // here age make a prt of object
// // //    obj={
// // //     name: "ankit",
// // //     lastname:"pandey"  // its through the error,when the obj is const data type
// // //    }
// // //    console.log(obj); // change the name ajay to ankit 

// // //    //*******  array ************//

// // //    let arr =[4,8,1,2];
// // //    console.log(arr);
// // //    arr=[2,6,8];
// // //    console.log(arr);
// // //    arr[2]=10;
// // //    console.log(arr);
// // //    arr[10]=41;
// // //    console.log(arr);
// // //    arr.push(10);      // iska matlb last me 10add ho jayega array me
// // //    console.log(arr);
// // //    console.log(typeof(arr)); // array is object type of data

// // //     // if we want to check object and array both are object then what is it ?


// // //     console.log(typeof(arr));
// // //     console.log(typeof(obj));

// // //     console.log(Array.isArray(obj)); // false
// // //     console.log(Array.isArray(arr)); // this is the method to check the given object is array or obj

// // //     // check this is array or obj

// // //    function CheckIfArrry(arr){
// // //     if(Array.isArray(arr)==true){  // array 
// // //         console.log("array");
// // //     }
// // //     else console.log("object");

// // // }
// // // let arr1=[5,8,7,3,6];
// // // CheckIfArrry(arr1);
// // // //---------------------------------------------
// // //  const arr2=["name",2,4];
// // //  const object={
// // //     "name": "ankit",
// // //     age : 20
// // //  };
// // //  for(let i=0;i<2;i++){
// // //     console.log(object[i]);
// // //  }
// // //  for(let i of arr2){
// // //     console.log(i);     // 2 4 its print the numeric value present in array
// // //  }
// // // //  for(let i of object){
// // // //     console.log(i);
// // // //  }
// // // for(let i in arr2){
// // //     console.log(i);   // 0 1 2  its print the index
// // //  }
// // //  for(let i in object){
// // //     console.log(i);  // name age
// // //  }
// // //  //----------------------------------------------* DOM *----
 
// // // console.log(window);         // window
// // // console.log(innerHeight);    // 943
// // // console.log(innerWidth);     // 150
// // // console.log(console);        // console
// // // console.dir(window);         // window
// // // console.dir(window.document);  // #document
// // // const s=document.getElementsByTagName('h2');
// // // console.log(s);
// // //array and function padhna hai 
// // // const t=document.getElementsById("ht3");
// // // console.log(t);

// // // document in javascript 

// // const t=document.querySelectorAll("div>h2");
// // console.log(t);
// // document.getElementById("ht1");
// // t["innerHTML"]= "hello,world"; // innertext tag se pura tag sahit aayega 
// // //

// const ne=document.createElement("h2");
// console.log(ne);
// ne.innerText="hii i am here";
// console.log(ne);
// const firstdiv=document.getElementsByTagName('h2');
// firstdiv[0].appendChild(ne);
// //ne.removeChild(ne.firstElementChild);
// firstdiv[0].removeChild(ne);


console.log("hello world !");
function sum(x,y){
    let result = x+y;
    console.log(result);
}
let a=5;
let b=8;
sum(a,b);