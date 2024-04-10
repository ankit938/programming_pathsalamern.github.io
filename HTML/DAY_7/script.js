// const fs = require('node:fs');
// const data=fs.readFileSync('./intro.txt');
// console.log(data);
// console.log(data.toString());


//////**************BUFFER***********/


// const b=new Buffer.from('Ankitmishra');
// console.log(b);

// console.log(b.toString());

// const b=new Buffer.from('MISHRAANKIT');
// console.log(b.toString());
// b.write('Other');
// console.log(b.toString);

// const fs = require('fs');
// FileSystem.writeFileSync('./log.txt',"10th april today");

// const fs =require('fs');
// console.log("start");
// const data=fs.readFileSync('./intro.txt',{encoding:'utf8'});
// console.log(data);
// console.log('end');

// const fspromise=require('fs/promises');
// const pr=fspromise.readFile('./intro.txt',{encoding:'utf8'});
// pr.then((res)=>{
//     console.log(res);
// })


// const fs =require('fs');

// fs.readFile('./intro.txt',{enoding:"utf:18"},(err,data)=>{
//     console.log(data);
// });

// const fs=require('fs/promisees');
// const pr=fs.readFile('./intro.txt');
// console.log(pr);

// const http=require('http');

// const app = http.createServer((req,res)=>{
//       console.log('request recieved');
//       console.log(req.url);
//       res.end("hello");
// });

//  app.listen(1400);
//console.log("hrllo world");

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// //Parse the address:
// var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);

// const http=require('http');
// const app=http.createServer((req,res)=>{
//     console.log("received");
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type': 'text/html'
//     })
//    // console.log(Object.keys(req));
//     // res.end('hello');
//     res.end('<h2>hello Ankit</h2');
// });
// // app.listen(1400); // http://localhost:1400/


// app.listen(1400,()=>{
//     console.log("*****response is clear Mr.Ankit Mishra******");
// })


//////////////////////////////////////////////////////////////////////////////
//
// const http=require('http');
// const htmlTemplate=`
// <!DOCTYPE 
// <HTML>
//    <HEAD> 
   
//    </HEAD> 
//    <BODY>
//       _products_card_
//    </BODY>`

//    const cardTemplate=`
//    <div class='_products_card_'>
//    <h4>title</h4>
//    <p>INFO</p>
//    </div>
//    `
//    const card1=cardTemplate 
//                   .replace('title','Xiomi')
//                   .replace('INFO','this is a china mobile')
    
//     const card2=cardTemplate
//                   .replace('title','samsung') 
//                   .replace('INFO','this is also a chinese mobile')
        
//     const allCards= card1+card2;
//    const page =htmlTemplate.replace('_products_card_',allCards);
            
// const server=http.createServer((req,res)=>{
//     //console.log("received");
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type': 'text/html'
//     })
//     res.end(page);
// });
// server.listen(1400,()=>{
//     console.log("*****response is clear Mr.Ankit Mishra******");
// })
//
//////////////////////////////////////////////////////////////////////////////////



const http=require('http');
const fs=require('fs');

const data=fs.readFileSync('./data.json','utf8');
const dataObj=JSON.parse(data);
console.log(data);
const htmlTemplate=`
<!DOCTYPE 
<HTML lang ="en-US">
   <HEAD> 
   
   </HEAD> 
   <style>
   ._products_card_{
    max-width:500px;
    margin: 20px auto;
    border: 3px double brown;
    border-radius: 8px;
    padding: 16px;
   }
   </style>
   <BODY>
      _products_card_
   </BODY>`

   const cardTemplate=`
   <div class='_products_card_'>
   <h4>title</h4>
   <p>INFO</p>
   </div>
   `
//    const card1=cardTemplate 
//                   .replace('title',products[0].title)
//                   .replace('INFO',products[0].description);
    
//     const card2=cardTemplate
//                   .replace('title',products[1].title) 
//                   .replace('INFO',products[1].description)

//     const card3=cardTemplate
//                   .replace('title',products[2].title) 
//                   .replace('INFO',products[2].description)  

        
    const allCards= products.map((elem)=>{
           let newCard=cardTemplate;
             newCard=newCard.replace('title',elem.title)
             newCard=newCard.replace('INFO',elem.description)
             return newCard;
    })
    const allCardString=allCards.join(' '); 
    const page =htmlTemplate.replace('_products_card_',allCardString);
const server=http.createServer((req,res)=>{
    //console.log("received");
    console.log(req.url);
    res.writeHead(200,{
        'content-type': 'text/html'
    })
    res.end(page);
});
server.listen(1400,()=>{
    console.log("*****response is clear Mr.Ankit Mishra******");
});