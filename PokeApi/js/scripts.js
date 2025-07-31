
function buscarAlgo(){
    document.getElementById("results").innerHTML=``;
    const nombreUsar = document.getElementById("buscar").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest(); //La importación del XML
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreUsar}`; //Acento Inverso ```+
    xhr.open("GET",url, true);
    xhr.onreadystatechange = function () {
     
        if (xhr.readyState === 4 && xhr.status === 200){
            try{
                let data = JSON.parse(xhr.responseText);
                let results = document.getElementById("results");
                results.innerHTML += `
                <p class="num"${data["id"]}</p>
                <p class="nPoke">${data["name"]}</p>
                `
                
                
            }catch(err){
                console.log(err.message); 
            }
        }
        
    };
    xhr.send();
}

buscarAlgo()