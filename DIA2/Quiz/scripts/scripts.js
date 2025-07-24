let ingredientes = [
    {
        "nombre": "Pan Clasico",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 1500,
        "stock": 500
    },
    {
        "nombre": "Pan Integral",
        "descripcion": "Pan de hamburguesa con Semillas y sin gluten",
        "precio": 2000,
        "stock": 300
    },
    {
        "nombre": "Pan Gourtmet",
        "descripcion": "Pan de hamburguesa hecho con Masa Madre",
        "precio": 3000,
        "stock": 200
    },

    {
        "nombre": "Carne de vaca",
        "descripcion": "Carne de vaca tradicional",
        "precio": 5000,
        "stock": 300
    },
    {
        "nombre": "Carne de Lentejas",
        "descripcion": "Carne hecha a base de lentejas",
        "precio": 3000,
        "stock": 500
    },
    {
        "nombre": "Carne Wayu",
        "descripcion": "Carne de vacas Wayu ",
        "precio": 8000,
        "stock": 100
    },

    {
        "nombre": "Queso Cheddar",
        "descripcion": "Queso Cheddar fundido",
        "precio": 1500,
        "stock": 200
    },
    {
        "nombre": "Queso Vegano",
        "descripcion": "Queso de origen Vegetal",
        "precio": 2000,
        "stock": 200
    },
    {
        "nombre": "Queso Cheddar añejo",
        "descripcion": "Queso Cheddar añejo fundido",
        "precio": 3500,
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

let hamgurguesas = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan Clasico", "Carne de vaca tradicional", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Salsa de la casa"],
        "precio": 8000,
        "chef": "Trevor"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Carne de lentejas", "Queso vegano", "Lechuga", "Cebolla", "Tomate", "Mayonesa vegana"],
        "precio": 7000,
        "chef": "Franklin"
    },
    {
        "nombre": "De la casa",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de masa madre", "Carne Wayu", "Queso cheddar añejo", "Jamón", "Lechuga", "Cebolla Crispy", "Salsa Especial"],
        "precio": 15500,
        "chef": "Michael"
    }
];




let booleanitoski = true
while (booleanitoski == true) {
    let menuPrin = prompt(
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
    if (menuPrin == "1") {
        let menuIng = prompt(
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
        if (menuIng == "1") {
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
                alert("Ingrediente no agregado")
            } else {
                alert("Opción incorrecta, volviendo al menu Principal")
            }
        } else if (menuIng == "2") {
            let eliminar = prompt("Ingrese el ingrediente a eliminar");
            ingredientes.splice(eliminar - 1, 1);
            alert("Ingrediente eliminado")
        }
        else if (menuIng == "3") {
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
        else if (menuIng == "4") {
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
    } else if (menuPrin == "2") {
        let menuChefs = prompt(
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
        if (menuChefs == "1") {
            let nombreChef = prompt("Ingresa el Nombre del nuevo Chef")
            let espcChef = prompt("Ingresa la especialidad del nuevo Chef")
            let seguro = prompt("Segur@ que deseas contratar este Chef? \n1. Si \n2. No\n");
            if (seguro == "1") {
                chefs.push({
                    "nombre": nombreChef,
                    "especialidad": espcChef
                });
                alert("El Chef fue Contratado con exito")
            } else if (seguro == "2") {
                alert("Chef no Contratado")
            }
        }
        else if (menuChefs == "2") {
            let despedir = prompt("Ingresa al Chef que deseas Despedir")
            chefs.splice(despedir - 1, 1);
            alert("Chef Despedido")
        }
        else if (menuChefs == "3") {
            let cambio = prompt("Ingresa el numero del Chef que deseas Cambiar")
            let nombreChef = prompt("Ingresa el nombre del nuevo Chef");
            let espcChef = prompt("Ingresa la especialidad del nuevo Ingrediente");
            chefs[cambio - 1]["nombre"] = nombreChef;
            chefs[cambio - 1]["especialidad"] = espcChef;
            alert("Chef Cambiado")
        }
        else if (menuChefs == "4") {
            let Lchefs = chefs.length;
            for (i = 0; i < Lchefs; i++) {
                alert(
                    "Nombre: " + chefs[i]["nombre"] + "\n" +
                    "especialidad: " + chefs[i]["especialidad"]
                )
            }
        }
    } else if (menuPrin == "3") {
        let menuCat = prompt(
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
        if (menuCat == "1") {
            let nombreCat = prompt("Ingresa el Nombre de la nueva Categoria")
            let descpCat = prompt("Ingresa la Descripción de la nueva Categoria")
            let seguro = prompt("Segur@ que deseas Añadir esta Categoria? \n1. Si \n2. No\n");
            if (seguro == "1") {
                categorias.push({
                    "nombre": nombreCat,
                    "categoria": descpCat
                });
                alert("La categoria fue agregada correctamente")
            } else if (seguro == "2") {
                alert("Categoria no agregada")
            }
        }
        else if (menuCat == "2") {
            let eliminar = prompt("Ingresa la categoria que deseas eliminar")
            categorias.splice(eliminar - 1, 1);
            alert("Categoria Eliminada")
        }
        else if (menuCat == "3") {
            let cambio = prompt("Ingresa el numero de la categoria que deseas actualizar")
            let nombreCat = prompt("Ingresa el nombre de la nueva categoria");
            let espcCat = prompt("Ingresa la descripción de la nueva categoria");
            categorias[cambio - 1]["nombre"] = nombreCat;
            categorias[cambio - 1]["especialidad"] = espcCat;
            alert("Categoria Actualizada")
        }
        else if (menuCat == "4") {
            let lCats = categorias.length;
            for (i = 0; i < lCats; i++) {
                alert(
                    "Nombre: " + categoria[i]["nombre"] + "\n" +
                    "Descripcion: " + descripcion[i]["descripción"]
                )
            }
        }
    } if (menuPrin == "1") {
        let menuIng = prompt(
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
        if (menuIng == "1") {
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
                alert("Ingrediente no agregado")
            } else {
                alert("Opción incorrecta, volviendo al menu Principal")
            }
        } else if (menuIng == "2") {
            let eliminar = prompt("Ingrese el ingrediente a eliminar");
            ingredientes.splice(eliminar - 1, 1);
            alert("Ingrediente eliminado")
        }
        else if (menuIng == "3") {
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
        else if (menuIng == "4") {
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
    }
    if (menuPrin == "4") {
        let menuHam = prompt(
            "===========================================\
            \n            Menu de Hamburguesas          \
            \n===========================================\
            \nSeleccione una opción:\
            \n\
            \n1. Añadir nueva Hamburguesa\
            \n2. Eliminar Hamburguesa\
            \n3. Actualizar Hambuerguesa\
            \n4. Ver Hambuerguesas\
            \n5. Salir\
            \n==========================================="
        )
        if (menuHam == "1") {
            let nombreHam = prompt("Ingresa el nombre de la Hambuerguesa que deseas añadir");
            let dscpHam = prompt("Ingresa la descripción de la Hambuerguesa");
            let valorHam = prompt("Ingresa el valor de la Hambuerguesa");
            let seguro = prompt("Segur@ que deseas añadir esta Hambuerguesa? \n1. Si \n2. No\n");
            if (seguro == "1") {
                ingredientes.push({
                    "nombre": nombreHam,
                    "descripcion": dscpHam,
                    "precio": valorHam,
                });
                alert("La Hambuerguesa fue agregada correctamente")
            } else if (seguro == "2") {
                alert("Hambuerguesa no agregada")
            } else {
                alert("Opción incorrecta, volviendo al menu Principal")
            }
        } else if (menuHam == "2") {
            let eliminar = prompt("Ingrese la Hambuerguesa a eliminar");
            ingredientes.splice(eliminar - 1, 1);
            alert("Hambuerguesa eliminada")
        }
        else if (menuHam == "3") {
            let cambio = prompt("Ingresa el numero de la Hambuerguesa que deseas actualizar")
            let nombreHam = prompt("Ingresa el nombre de la nueva Hambuerguesa");
            let dscpHam = prompt("Ingresa la descripcion de la nueva Hambuerguesa");
            let valorHam = prompt("Ingresa el valor de la nueva Hambuerguesa");
            hamgurguesas[cambio - 1]["nombre"] = nombreHam;
            hamgurguesas[cambio - 1]["descripcion"] = dscpHam;
            hamgurguesas[cambio - 1]["valor"] = valorHam;
            alert("Hamburguesa Actualizada")
        }
        else if (menuHam == "4") {
            let menu = hamgurguesas.length;
            for (i = 0; i < menu; i++) {
                alert(
                    "Ingrediente N. " + (i + 1) + "\n" +
                    "Nombre: " + hamgurguesas[i]["nombre"] + "\n" +
                    "Ingredientes: " + hamgurguesas[i]["ingredientes"] + "\n" +
                    "Precio: " + hamgurguesas[i]["precio"]+ "\n" +
                    "chef" + hamgurguesas[i]["chef"]
                )
            }
        }
    }
}
//Desarrollado por: Luis Angel Gelvez Delgado - C.C:1.098.071.730
//Con Guia de Monsalve