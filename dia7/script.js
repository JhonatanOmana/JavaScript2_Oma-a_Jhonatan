document.getElementById("super").addEventListener("click",getDataFromAPI)
function getDataFromAPI(){
    fetch(`https://superheroapi.com/api.php/de6fea41782f170cb130ca02a89c5f9a/245`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        
    })  
}



