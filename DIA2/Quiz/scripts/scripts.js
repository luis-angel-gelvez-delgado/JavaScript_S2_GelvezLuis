let ingredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 1500,
        "stock": 500
    },
    {
        "nombre": "Carne de vaca",
        "descripcion": "Carne de vaca tradicional",
        "precio": 5000,
        "stock": 300
    },
    {
        "nombre": "Queso doble crema",
        "descripcion": "Queso doble crema fundido",
        "precio": 1500,
        "stock": 200
    }
];

let chefs = [
    {
        "nombre": "Trevor",
        "especialidad": "Carnes"
    },
    {
        "nombre": "Franklin",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "Michael",
        "especialidad": "Gourmet"
    }
];

let categorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas de toda la vida"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas con carne a base de lentejas, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas con ingredientes la mejor calidad posible"
    }
];




let booleanitoski = true
while (booleanitoski == true) {
    let menu1 = prompt(
        "=======================================\
    \n    Bienvenido al simulador de Hamburguesas   \
    \n========================================\
    \nSeleccione una opción:\
    \n\
    \n1. Ingresar al menu de ingredientes\
    \n2. Ingresar al menu de Chefs\
    \n3. Ingresar al menu de Categoria\
    \n4. Ingresar al menu de Hamburguesas\
    \n5. Salir\
    ======================================");
    if (menu1 == "1") {
        let menu2 = prompt(
            "===========================================\
            \n            Menu de Ingredientes          \
            \n===========================================\
            \nSeleccione una opción:\
            \n\
            \n1. Añadir nuevo Ingrediente\
            \n2. Eliminar Ingrediente\
            \n3. Actualizar Ingrediente\
            \n4. Ver ingredientes\
            \n5. Salir\
            \n==========================================="
        )
        if (menu2 == "1") {
            let nombreIng = prompt("Ingresa el nombre del ingrediente que deseas añadir");
            let dscpIng = prompt("Ingresa la descripción del ingrediente");
            let valorIng = prompt("Ingresa el valor del ingrediente");
            let stock = prompt("Ingresa la cantidad dispoible del ingrediente");
            let seguro = prompt("Segur@ que deseas añadir este ingrediente? \n1. Si \n2. No\n");
            if (seguro == "1") {
                ingredientes.push({
                    "nombre": nombreIng,
                    "descripcion": dscpIng,
                    "precio": valorIng,
                    "stock": stock,
                });
                alert("El ingrediente fue agregado correctamente")
            } else if (seguro == "2") {
                alert("Opción no agregada")
            } else {
                alert("Opción incorrecta, volviendo al menu Principal")
            }
        } else if (menu2 == "2") {
            let eliminar = prompt("Ingrese el ingrediente a eliminar");
            ingredientes.splice(eliminar - 1,1);
            alert("Ingrediente eliminado")
        }
        else if (menu2 == "3") {
            let cambio = prompt("Ingresa el numero del ingrediente que deseas actualizar")
            let nombreIng = prompt("Ingresa el nombre del nuevo Ingrediente");
            let dscpIng = prompt("Ingresa la Descripcion del nuevo Ingrediente");
            let valorIng = prompt("Ingresa el valor del nuevo Ingrediente");
            let stock = prompt("Ingresa la cantidad disponible con la que cuenta el nuevo Ingrediente");
            ingredientes[cambio - 1]["nombre"] = nombreIng;
            ingredientes[cambio - 1]["descripcion"] = dscpIng;
            ingredientes[cambio - 1]["valor"] = valorIng;
            ingredientes[cambio - 1]["stock"] = stock;
            alert("Ingrediente Actualizado")
        }
        else if (menu2 == "4") {
            let menu = ingredientes.length;
            for (i = 0; i < menu; i++) {
                alert(
                    "Ingrediente N. " + (i + 1) + "\n" +
                    "Nombre: " + ingredientes[i]["nombre"] + "\n" +
                    "Descripcion: " + ingredientes[i]["descripcion"] + "\n" +
                    "Precio: " + ingredientes[i]["precio"] + "\n" +
                    "Stock: " + ingredientes[i]["stock"]
                )
            }
        }
    } else if (menu1 == "2") {
        let menu3 = prompt(
            "===========================================\
            \n               Menu de Chefs              \
            \n===========================================\
            \nSeleccione una opción:\
            \n\
            \n1. Contratar nuevo Chef\
            \n2. Despedir Chef\
            \n3. Cambiar Chef\
            \n4. Ver Chef\
            \n5. Salir\
            \n==========================================="
        )
        if (menu3 == "1") {
            let nombreChef = prompt("Ingresa el Nombre del nuevo Chef")
            let espcChef = prompt("Ingresa la especialidad del nuevo Chef")
            let seguro = prompt("Segur@ que deseas contratar este Chef? \n1. Si \n2. No\n");
            if (seguro == "1") {
                chefs.push({
                    "nombre": nombreChef,
                    "especialidad": espcChef
                })
            } else if (seguro == "2") {
                alert("Chef no Contratado")
            }
        }
        else if (menu3 == "2") {
            let despedir = prompt("Ingresa al Chef que deseas Despedir")
            chefs.splice(despedir - 1, 1);
            alert("Chef Despedido")
        }
        else if (menu3 == "3") {
            let cambio = prompt("Ingresa el numero del Chef que deseas Cambiar")
            let nombreChef = prompt("Ingresa el nombre del nuevo Chef");
            let espcChef = prompt("Ingresa la especialidad del nuevo Ingrediente");
            chefs[cambio - 1]["nombre"] = nombreChef;
            chefs[cambio - 1]["especialidad"] = espcChef;
            alert("Chef Cambiado")
        }
        else if (menu3 == "4") {
            let Lchefs = chefs.length;
            for (i = 0; i < Lchefs; i++) {
                alert(
                    "Nombre: " + chefs[i]["nombre"] + "\n" +
                    "especialidad: " + chefs[i]["especialidad"]
                )
            }
        }
    } else if (menu1 == "4") {
        let menu4 = prompt(
            "===========================================\
            \n             Menu de Categoria            \
            \n===========================================\
            \nSeleccione una opción:\
            \n\
            \n1. Nueva Categoria\
            \n2. Eliminar Categoria\
            \n3. Actualizar Categoria\
            \n4. Ver Categoria\
            \n5. Salir\
            \n==========================================="
        )
        if (menu4 == "1") {
            let nombreCat = prompt("Ingresa el Nombre de la nueva Categoria")
            let descpCat = prompt("Ingresa la Descripción de la nueva Categoria")
            let seguro = prompt("Segur@ que deseas Añadir esta Categoria? \n1. Si \n2. No\n");
            if (seguro == "1") {
                categorias.push({
                    "nombre": nombreCat,
                    "categoria": descpCat
                })
            } else if (seguro == "2") {
                alert("Categoria no añadida")
            }
        }
        else if (menu4 == "2") {
            let eliminar = prompt("Ingresa la categoria que deseas eliminar")
            categorias.splice(eliminar - 1, 1);
            alert("Categoria Eliminada")
        }
        else if (menu4 == "3") {
            let cambio = prompt("Ingresa el numero de la categoria que deseas actualizar")
            let nombreCat = prompt("Ingresa el nombre de la nueva categoria");
            let espcCat = prompt("Ingresa la descripción de la nueva categoria");
            categorias[cambio - 1]["nombre"] = nombreCat;
            categorias[cambio - 1]["especialidad"] = espcCat;
            alert("Categoria Actualizada")
        }
        else if (menu4 == "4") {
            let lCats = categorias.length;
            for (i = 0; i < lCats; i++) {
                alert(
                    "Nombre: " + categoria[i]["nombre"] + "\n" +
                    "Descripcion: " + descripcion[i]["descripción"]
                )
            }
        }
    }
}


//Desarrollado por: Luis Angel Gelvez Delgado - C.C:1.098.071.730
//Con mucha ayuda de Monsalve