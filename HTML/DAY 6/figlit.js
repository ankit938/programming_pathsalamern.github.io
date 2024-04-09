// var figlet = require("figlet");

// figlet("ANKIT  MISHRA !", (err, data)=>{
//   console.log(data);
// });

// console.log('start')
// async function getApi(){
//     console.log('api calling')
//     const pr=await fetch("https://api.github.com/users/deepak3440")
//     console.log("making json")
//     const data = await pr.json();
//     console.log(data);
//     console.log('::fetched data::')
// }
// getApi();
// console.log('end');

console.log('start');
async function callapi(){
    const pr=new Promise((res,rej)=>{
      console.log('promise start');
          setTimeout(()=>{
            console.log('time ooout 1...');
          },10000)})
          console.log('promises');
}
