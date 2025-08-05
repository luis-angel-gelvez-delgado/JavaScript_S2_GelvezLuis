function buscarSuperHero(){
    document.getElementById("results").innerHTML=``;

    const nombreUsar = document.getElementById("nombreInput").ariaValueMax.trim();
    console.log(nombreUsar)
    const xhr = new XMLHttpRequest();
    const url = `https://www.superheroapi.com/api.php/4b999b744359c464f472528e61e32049/search?name=${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function (){
        if (xhr.readyState === 3){
            console.log("cargando")
        } 
        else if(xhr.readyState === 4 && xhr.status === 200){
            try{
                const data = JSON.parse(xhr.responseText);
                if (data.results && data.results.length > 0){
                    for (let i = 0; i < data.results.length; i++){
                        let division = document.getElementById("results");
                        division.innerHTML += `
                        <div class="card">
                            <img src="${data[results][i]["image"]}">
                            <h3>${data["results"][i]["name"]}</h3>
                            <p><strong>ID:</strong>${data["results"][i][id]}
                        </div>
                                `
                                console.log(data["results"][i]["name"])
                    }
                }
            }
            catch{
                console.log(err.message);
            }
        }
    };
    xhr.send();
}