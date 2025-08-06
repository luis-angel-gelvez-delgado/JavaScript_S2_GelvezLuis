function buscarSuperHero() { //esta es la funcion ¿Principal?
    document.getElementById("resultados").innerHTML = ``;//Esto es para obtener los resultados en base al ID, si usamos clases, seria ByClassName y no ById
    const nombreUsar = document.getElementById("nombreInput").value.trim();//const(Nombre de la variable) nombreUsar(el nombre de la variable)//
    console.log(nombreUsar)
    const xhr = new XMLHttpRequest();
    const url = `https://www.superheroapi.com/api.php/4b999b744359c464f472528e61e32049/search/${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {
            console.log("cargando")
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log(data)
                if (data.results && data.results.length > 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">
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

//Vamos con los document

/* 
 1.  Document.activeElement //                               Devuelve el Element activo actualmente
 2.  Document.body //                                        Devuelve el nodo <body> o <frameset> del documento actual
 3.  Document.characterSet //                                Devuelve el conjunto de caracteres que utiliza el documento
 4.  Document.childElementCount //                           Devuelve el número de caracteres quee utiliza el documento
 5.  Document.children //                                    Devuelve los elementos hjos del documento actual
 6.  Document.compatMode //                                  Indica si el documento se presenta en modo //quirks// o strict
 7.  Document.contentType //                                 Devuelve el tipo contenido del encabezado MIME del documento actual
 8.  Document.currentScript //                               Devuelve el Elemento <script> cuyo script se esta procesando actualmente y //no es un modulo de JavaScript//
 9.  Document.doctype //                                     Devuelve la Definición de Tipo de Documento (DTD) del documento actual
 10. Document. //                                            Devuelve el Element activo actualmente
 11. Document.documentElementRead only //                    Devuelve el Element que es un hijo directo del documento. Para documentos HTML, normalmente es el objeto HTMLHtmlElement que representa el elemento <html> del documento
 12. Document.documentURIRead only //                        Devuelve la ubicación del documento como una cadena.
 13. Document.embedsRead only //                             Devuelve un HTMLCollection de los elementos <embed> incrustados en el documento.
 14. Document.firstElementChild Read only //                 Devuelve el primer elemento hijo del documento actual.
 15. Document.fonts //                                       Devuelve la interfaz FontFaceSet del documento actual.
 16. Document.formsRead only //                              Devuelve un HTMLCollection de los elementos <form> del documento.
 17. Document.fullscreenElement Read only //                 El elemento que está actualmente en modo de pantalla completa para este documento.
 18. Document.headRead only //                               Devuelve el elemento <head> del documento actual.
 19. Document.hiddenRead only //                             Devuelve un valor booleano que indica si la página se considera oculta o no.
 20. Document.imagesRead only //                             Devuelve un HTMLCollection de las imágenes del documento.
 21. Document.implementationRead only //                     Devuelve la implementación DOM asociada con el documento actual.
 22. Document.lastElementChild Read only //                  Devuelve el último elemento hijo del documento actual.
 23. Document.linksRead only //                              Devuelve un HTMLCollection de los hipervínculos del documento.
 24. Document.mozSyntheticDocument No estándar //            Devuelve true solo si este documento es sintético, como una imagen independiente, video, archivo de audio o similar.
 25. Document.pictureInPictureElement Read only //           Devuelve el Element que se presenta actualmente en modo picture-in-picture en este documento.
 26. Document.pictureInPictureEnabled Read only //           Devuelve true si la función picture-in-picture está habilitada.
 27. Document.pluginsRead only //                            Devuelve un HTMLCollection de los complementos disponibles.
 28. Document.pointerLockElement Read only //                Devuelve el conjunto de elementos como destino para los eventos del mouse mientras el puntero está bloqueado. null si el bloqueo está pendiente, el puntero está desbloqueado o si el objetivo está en otro documento.
 29. Document.featurePolicy ExperimentalRead only //         Devuelve la interfaz FeaturePolicy que proporciona una API simple para analizar las políticas de funciones aplicadas a un documento específico.
 30. Document.scriptsRead only //                            Devuelve un HTMLCollection de los elementos <script> del documento.
 31. Document.scrollingElementRead only //                   Devuelve una referencia al Element que desplaza el documento.
 32. Document.styleSheets Read only //                       Devuelve un objeto StyleSheetList de CSSStyleSheet para hojas de estilo explícitamente vinculadas o incrustadas en un documento.
 33. Document.timeline ExperimentalRead only //              Devuelve la línea de tiempo como una instancia especial de DocumentTimeline que se crea automáticamente al cargar la página.
 34. Document.visibilityStateRead only //                    Devuelve un string que indica el estado de visibilidad del documento. Los valores posibles son visible, hidden, prerender y unloaded.
*/