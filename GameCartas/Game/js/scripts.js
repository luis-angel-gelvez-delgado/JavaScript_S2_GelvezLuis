async function revelarCartas(cards) {
  //aqui esta la funcion revelarCartas
  document.getElementById(
    "susCards"
  ).innerHTML = `<img src= ${cards[0]["image"]} alt="noCarga">`;
  document.getElementById(
    "misCards"
  ).innerHTML = `<img src=${cards[1]["image"]} alt="noCarga">`;
  console.log("hello");
} 
function validarValor(value) {
  if (value == "ACE"){return 1}
  else if (value == "JACK"){return 11}
  else if (value == "QUEEN"){return 12}
  else if (value == "KING"){return 13}
  else {return parseInt(value)} 
}
function repartirCartas(idMazo) {
  const xhr = new XMLHttpRequest();
  const url = `https://www.deckofcardsapi.com/api/deck/${idMazo}/draw/?count=2`;
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        const btnMenor = document.getElementById("btnMenor");
        const btnMayor = document.getElementById("btnMayor");
        const btnEqual = document.getElementById("btnEqual");
        const misCards = document.getElementsByClassName("misCards");
        const data = JSON.parse(xhr.responseText);
        const cards = data["cards"];
        console.log(cards);
        document.getElementById(
          "susCards"
        ).innerHTML = `<img src="https://www.deckofcardsapi.com/static/img/back.png" alt="noCarga">`;
        document.getElementById(
          "misCards"
        ).innerHTML = `<img src="https://www.deckofcardsapi.com/static/img/back.png" alt="noCarga">`;
        btnMenor.addEventListener("click", () => {
          if (validarValor(cards[0]["value"]) < validarValor(cards[1]["value"])) {
            alert("Perdiste una ronda , tu carta no era menor");
          }
          else{ 
            alert("Ganaste una ronda!!! Tu carta era Menor")
          }
          revelarCartas(cards);
        });
        btnMayor.addEventListener("click", () => {
          if (validarValor(cards[0]["value"]) > validarValor(cards[1]["value"])) {
            alert("Perdiste una ronda, tu carta no era mayor");
          }
          else{ 
            alert("Ganaste una ronda!!! Tu carta era Mayor")
          }
          revelarCartas(cards);
        });
        btnEqual.addEventListener("click", () => {
          if (validarValor(cards[0]["value"]) == validarValor(cards[1]["value"])) {
            alert("Perdiste una ronda, tu carta no era igual");
          }
          else{ 
            alert("Ganaste una ronda!!! Ambas cartas eran Iguales")
          }
          revelarCartas(cards);
        });
      } catch (err) {
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
        const ideDeMazo = data["deck_id"];
        repartirCartas(ideDeMazo);
      } catch (err) {
        alert(err.message);
      }
    }
  };
  xhr.send();
}

obtenerMazo();
