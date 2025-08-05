async function revelarCartas(cards) {//aqui esta la funcion revelarCartas
    document.getElementById('susCards').innerHTML = `<img src= ${cards[0]['image']} alt="noCarga">`
    document.getElementById('misCards').innerHTML = `<img src=${cards[1]['image']} alt="noCarga">`
    console.log("hello")
}
function repartirCartas(idMazo) {


    const xhr = new XMLHttpRequest();
    const url = `https://www.deckofcardsapi.com/api/deck/${idMazo}/draw/?count=2`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const btnMenor = document.getElementById('btnMenor')
                const btnMayor = document.getElementById('btnMayor')
                const btnEqual = document.getElementById('btnEqual')
                const misCards = document.getElementsByClassName("misCards")
                const data = JSON.parse(xhr.responseText);
                const cards = data['cards']
                console.log(cards)
                document.getElementById('susCards').innerHTML = `<img src="https://www.deckofcardsapi.com/static/img/back.png" alt="noCarga">`
                document.getElementById('misCards').innerHTML = `<img src="https://www.deckofcardsapi.com/static/img/back.png" alt="noCarga">`
                btnMenor.addEventListener('click', ()=>{ revelarCartas(cards)})
                btnMayor.addEventListener('click', ()=>{ revelarCartas(cards)})
                btnEqual.addEventListener('click', ()=>{ revelarCartas(cards)})
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
