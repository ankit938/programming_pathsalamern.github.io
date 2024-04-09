// setTimeout(() =>{
//     console.log("timeout1..."),20000});
// console.log("start");
// setTimeout(() =>{
//         console.log("timeout2...."),10000});
// console.log("intermediate");
// console.log("end.....")



// function createOrder(x,fn){
//     console.log(x);
//    setTimeout(()=>{ fn("lik123"),1000});
// }
// function makpayment(orderId){

// }
// createOrder('soap',makpayment);


// const pr=new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         // resolve("done -123");
//         rejected("some error occupied");
//     },0)
// });
// setTimeout(()=>{
//     console.log('fisrt comment'),0});
// //    } )
// //    else{
// //     rejected();
// //    } 
// // });
// console.log(pr);
// pr.then((res) =>{ // resolve ke liye then use hota hai aur reject ke liye catch 
//     console.log(res);
// }).catch((err)=>{console.log(err)});// then is callback function





    setTimeout(function abc(){
        // resolve("done -123");
       // rejected("some error occupied");
       console.log("i am here")
    },0)
    const pr =new Promise((res,rej)=>{
setTimeout(()=>{
    console.log('fisrt comment'),0});
 
});
console.log(pr);
pr.then((res) =>{ // resolve ke liye then use hota hai aur reject ke liye catch 
    console.log(res);
}).catch((err)=>{console.log(err)});// then is callback function
