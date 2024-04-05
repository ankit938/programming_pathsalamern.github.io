// const firstNameChange=(e)=>{
   // console.log(e.target.value);
//    const val=e.target.value;
//    if(val.length>2){
//     console.log("correct");
//    }
// }
// function submitForm() {
//     document.getElementById("myForm").submit();
//   }

// function submitForm(e){

//     e.preventDefault();
//     const t=e.target;
    // console.log(e);
//     for(let i=0;i<t.length;i++){
//         e.preventDefault();
//         const t=e.target;
//         const ty=t[i].type;
//         const vl=t[i].value;   // jis par check karenge vah true ho jayega
//         // console.log(t[i]);  // sabhi input print ho jatyega
//         console.log(ty,vl);
        
//         if(ty=="checkbox"){
//             console.log(t[i].checked);
//         }
//     }
// }
e.preventDefault();
const t=e.target;
for(let i=0;i<t.length;i++){
    // e.preventDefault();
    // const t=e.target;
    const res = {
        hobbies:[]
    };
    for(let i=0;i<t.length;i++){

    
    const ty=t[i].type;
    if(ty!="submit"){
        const vl=t[i].value; 
        const nm=t[i].name; 

    if(ty=="checknox" && t[i].checked){
        res.hobbies.push(vl);
    }
       if(ty=="checkbox"){
        res[nm]=vl;
    }
}
}
console.log(res);
}
