function imprimirData(event) {
    if (event.key === 'Enter') {
        buscarAlgo();
    }
}

function buscarAlgo() {
    document.getElementById("dataInfo").innerHTML = ``;
    const nombreUsar = document.getElementById("buscar").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest(); //La importación del XML
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreUsar}`; //Acento Inverso ```+
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            try {
                let data = JSON.parse(xhr.responseText);
                let results = document.getElementById("dataInfo");
                results.innerHTML = `
                <h1 class="num">${data["id"]}</h1>
                <h1 class="nPoke"> ${data["name"]}</h1>
                `
            } catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
}
