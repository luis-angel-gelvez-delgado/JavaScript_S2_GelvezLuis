const apiUrl = "https://jsonplaceholder.typicode.com/";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        // 0 = unset, no se ha llamado al open
        // 1 = opened, se ha llamado al open
        // 2 = headers_received, se esta llamando el send
        // 3 = loading, se esta cargando, osea:  esta reciviendo la respuesta
        // 4 = done, se ha completado la operación 
        console.log(this.response);
    }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", '${apiUrl}/users');
xhr.send();