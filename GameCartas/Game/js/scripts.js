
function repartirCartas() {
    document.getElementById("results").innerHTML=``;
    const xhr = new XMLHttpRequest();
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                if (data.results && data.results.length > 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        let division = document.getElementById("results");
                        division.innerHTML += `
                        <div class="cards">
            <img src="${daticos["results"][i]["image"]}" alt="">
            <h3>${daticos["results"][i]["name"]}</h3>
            <p><strong>Status:</strong>${daticos["results"][i]["status"]}</p>
            <p><strong>Specie:</strong>${daticos["results"][i]["species"]}</p>
        </div>
                        `
                    }
                }
            }
            catch (err) {
                alert(err.message);
            }
        }
    };
    xhr.send();
}
