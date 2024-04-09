console.log("...API Started...");
function callApi(){
      fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=8c3f24d25a9d43d0a401b6db693dfc4e")
      .then((res)=>{
        return res.json();
            console.log(data);
        })
        .then((data) =>{
            renderUI(data);
        })
}
//

function renderUI(data){
    const article=data.articles;
    //single article from the ariticles array
    for(let i=0;i<article.length;i++){
    const ar =article[i];
    console.log(ar);
    console.log(data);
    const root =document.getElementById("root");
    const div=document.createElement("div");
    div.setAttribute("class","news-card");
    const h3=document.createElement("h3");
       // div.innerText='card';
    div.innerText=ar.title;
   // h3.innerText=ar.title;
   // console.log(root);
   const img =document.createElement("img")
   img.src=ar.urlToImage;
   div.appendChild(h3);
   div.appendChild(img);


   const p=document.createElement('p');
   p.innerHTML=ar.description;
   div.appendChild(p);
   const a=document.createElement('a');
   a.href=ar.url;
   a.target="_blank";
   a.textContent="read more";
   a.style.color="white";
   a.style.backgroundColor="green";
   div.appendChild(a);
   
   // div.appenedChild(h3);
    root.appendChild(div);
    
}
}
//renderUI();
callApi();