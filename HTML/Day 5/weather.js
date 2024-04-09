function fetchAPI(){
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=ZWMDKK78S7S4JVVJWN24XDWCH" 
    fetch(url)
    .then((res)=>res.json())
    .then(console.log);
}
fetchAPI(res);
function renderUI(){
    const days=date.days;
    console.log(days);
    const row=document.createElement("tr");
    let cell=document.createElement("th");
    cell.innerText="Date";
    row.appendChild(cell);


    const row1=document.createElement("tr");
    let cell1=document.createElement("th");
    cell.innerText="month";
    row.appendChild(cell1);
   // root.append(row1)
}
renderUI();


//maps