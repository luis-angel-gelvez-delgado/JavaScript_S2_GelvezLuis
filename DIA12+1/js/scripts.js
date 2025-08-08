function buscarSuperHero() { //esta es la funcion ¿Principal?
    document.getElementById("resultados").innerHTML = ``;//Esto es para obtener los resultados en base al ID, si usamos clases, seria ByClassName y no ById
    const nombreUsar = document.getElementById("nombreInput").value.trim();//const(Nombre de la variable) nombreUsar(el nombre de la variable)//
    console.log(nombreUsar)
    const xhr = new XMLHttpRequest();
    const url = `https://www.superheroapi.com/api.php/4b999b744359c464f472528e61e32049/search/${nombreUsar}`;//Aqui va el link, y en la partee de {nombreUsar}, tal y como indica , colocaras el nombre a buscar, por ejemplo: hulk
    console.log(url);//Muestra un link en consola que contiene toda la data del(os) personaje(s) buscado(s), y es de donde sacaremos la data completa (nombre, edad, id, color de pelo, de ojos, status, trabajo, etc.. )y es de donde mas trade sacaramos la data requerida
    xhr.open("GET", url, true);//entra en el conseguido, para empezar a conseguir los datos
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {// si es igual a 3, significa que esta cargando, no es necesario, pero es buena practica creo
            console.log("cargando")// Muestra un mensaje de "cargando"en cago de que el readyState sea 3
        } 
        else if (xhr.readyState === 4 && xhr.status === 200) {// el readyState 4 significa que la operacion se completo, y el status 200 significa que la solicitud ha tenido exito
            try {// Hacemos un try donde estara el bloque de codigo que tal vez pueda tener un error, para de esa manera buscarle solución
                const data = JSON.parse(xhr.responseText); // El jason.parse sirve para convertir opcionalmente una cadena de texto, en una estructura JSON (se ve mas ordenado)
                console.log(data)// Muestra toda la data obtenida del(os) personaje(s) buscado(s), y es de donde vamos a extraer lo requerido, como el nombre, id, imagen, etc...
                if (data.results && data.results.length > 0) {// EL operador && (AND) sirve para? NPI de momento, pero creo que es para obtener el largo de la data extraida
                    for (let i = 0; i < data.results.length; i++) {// // En las siguientes lineas estaremos extrayendo la data requerida ya mencionada
                        let division = document.getElementById("resultados");
                        division.innerHTML += /*NPI de por que la division*/
                        // El div a continuacion es para acomodar de manera ordenada la data que estaremos extrayendo, y a continuación: La data
                        //
                        `<div class="card">
                            <img src="${data["results"][i]["image"]["url"]}">
                            <h3>${data["results"][i]["name"]}</h3>
                            <p><strong>ID:</strong>${data["results"][i]["id"]}
                        </div>`
                        console.log(data["results"][i]["name"])
                    }
                }
            }
            catch {
                console.log("Error");
            }
        }
    }
    xhr.send();
}
/* Los readyState
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
 */

/* El Status
Respuestas informativas (100–199),
Respuestas satisfactorias (200–299),
Redirecciones (300–399),
Errores de los clientes (400–499),
y errores de los servidores (500–599).
 */