function revelarCartas(cards) {
    document.getElementById('susCards').innerHTML = `<img src= ${cards[0]['image']} alt="noCarga">`
    document.getElementById('misCards').innerHTML = `<img src="https://www.deckofcardsapi.com/static/img/back.png" alt="noCarga">`
}
function repartirCartas(idMazo) {


    const xhr = new XMLHttpRequest();
    const url = `https://www.deckofcardsapi.com/api/deck/${idMazo}/draw/?count=2`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {

                const misCards = document.getElementsByClassName("misCards")

                const data = JSON.parse(xhr.responseText);
                const cards = data['cards']
                console.log(cards)
                document.getElementById('susCards').innerHTML = `<img src="https://www.deckofcardsapi.com/static/img/back.png" alt="noCarga">`
                document.getElementById('misCards').innerHTML = `<img src="https://www.deckofcardsapi.com/static/img/back.png" alt="noCarga">`
                revelarCartas(cards)
            }
            catch (err) {
                alert(err.message);
            }
        }
    };
    xhr.send();
}


function obtenerMazo() {
    const xhr = new XMLHttpRequest();
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {

                const data = JSON.parse(xhr.responseText);
                const ideDeMazo = data['deck_id']
                repartirCartas(ideDeMazo)

            }
            catch (err) {
                alert(err.message);
            }
        }
    };
    xhr.send();
}

obtenerMazo()
