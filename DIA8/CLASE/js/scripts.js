 // Consumo de API
 // Mediante XMLHttpRequest

//Modularizar el consumo de la api
function buscarAlgo(){
    const nombreUsar = prompt("Ingresar el nombre del personaje a buscar");
    const xhr = new XMLHttpRequest(); //La importación del XML
    const url = `https://swapi.dev/api/people?=${nombreUsar}`; //Acento Inverso ```
    console.log(url);
    xhr.open("GET",url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3){
            alert("Cargando...")
        }

        else if (xhr.readyState === 4 && xhr.status === 200){
            try{

                const daticos = JSON.parse(xhr.responseText);
                alert(`The character is: Name: "${daticos["results"][0]["name"]}" Height: "${daticos["results"][0]["height"]}" Mass: "${daticos["results"][0]["mass"]}" Hair_color: "${daticos["results"][0]["hair_color"]}" Skin_color: "${daticos["results"][0]["skin_color"]}" Eye_color: "${daticos["results"][0]["eye_color"]}"   Birth_year: "${daticos["results"][0]["birth_year"]}" Gender: "${daticos["results"][0]["gender"]}" Homeworld: "${daticos["results"][0]["Homeworld"]}" films: "${daticos["results"][0]["films"]}" Species: "${daticos["results"][0]["species"]}" vehicles: "${daticos["results"][0]["vehicles"]}" Starship: "${daticos["results"][0]["starship"]}" Created: "${daticos["results"][0]["created"]}" Edited: "${daticos["results"][0]["edited"]}" Url: "${daticos["results"][0]["url"]}" `);
            }catch(err){
                console.log(err.message); //Si algo malo pasa simplemente imprima el error
            }
        }
    };
    xhr.send();
}
buscarAlgo();