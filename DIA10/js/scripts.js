
function buscarPoke() {
    document.getElementById("results").innerHTML = ``;
    const nombreUsar = document.getElementById("buscar").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest(); //La importación del XML
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreUsar}`; //Acento Inverso ```+
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...")
        }

        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                //if (data.results && data.results.length > 0) {
                //    for (let i = 0; i < data.results.length; i++) {
                let division = document.querySelector(".resultado");
                
                console.log(data["name"]);
                //}
                //}
            } catch (err) {
                console.log(err.message);
            }
        }

    };
    xhr.send();
};

buscarPoke();