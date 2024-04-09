// const arr =[10,20,34]
// // const ans =arr.forEach((a)=>{
//     const ans =arr.map((a)=>{
//     console.log(a);
//     return a*2;
// })
// console.log(ans);
// // const ans2=arr.map(a=>Math.pow(a,2));
// const ans2=arr.map(a=>a**2);
// console.log(ans2);
// const arr2=[10.2,15.32,48.65]
// const ans3=arr2.map(a=>parseInt(a));
// console.log(ans3);

// const ans4=arr.filter((a)=>{
//     if(a>20) return true;
//     else return false ;
// })
// console.log(ans4);
// const arr3=["delhi","mumbai","gujrat","canbara",
//             "chennai","pune","india","Iraq"];
//     // for(let i=0;i<arr3.length;i++){
//     //     if(arr[i]=='i');
//     //     console.log(arr3);
//     // }
//   //  console.log(arr3[0][0])
//     const ans5=arr3.filter((s)=>{
//         if(s.includes('i') || s.includes('I')){
//             return true;
//         }
//         else return false
//     });
//     console.log(ans5);



// const arr6=["Delhi , India","mumbai-india","chennai=india"
//              , "sanghai-china","texas-usa"];
// const ans6=arr6.filter((a)=>a.toLowerCase().includes('india'));
// const ans7=arr6.filter((a)=>a.toUpperCase().includes('india'));
// console.log(ans6);
// console.log(ans7);



// const arr8=[2,4,8,10];
// const ans8=arr8.reduce((a,b,c,d)=>{ //(sum,currentvaue,index,totalArray)
//     console.log(a,b,c,d);
//     return a+b;
// }) 
// console.log(ans8);



// const arr9=["a","b","c","d"];
// const ans9=arr9.reduce((a,b,c,d)=>{ //(sum,currentvaue,index,totalArray)
//     console.log(a,b,c,d);
//     return a+b;
// }) 
// console.log(ans9);



// const sum=function sum(a,b){
//     console.log(a+b);
// }
//mudule.exports=sum;

//sum(12,45);

// function sum(a,b){
//     console.log(a*b);
// }
// mudule.exports=mul;
// module.exports={
//     fn1: sum,
//     fn2: mul
// };
// console.log(fn1);
//sum(23,8);

var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});