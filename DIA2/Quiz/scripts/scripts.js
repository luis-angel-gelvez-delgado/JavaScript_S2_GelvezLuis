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

let hamgur = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": "pan, carne de vaca tradicional, Queso doble crema", 
        "precio": 8000,
        "chef": "ChefA"
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
    \n2. Ingresar al menu de Categoria\
    \n3. Ingresar al menu de Hamburguesas\
    \n4. Ingresar al menu de Chefs\
    \n5. Salir\
    ======================================")
;

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
    if (seguro == "1"){
        ingredientes.push({
            "nombreIng": nombreIng,
            "dscpIng": dscpIng,
            "valorIng": valorIng,
            "stock": stock,
        });
        alert("El ingrediente fue agregado correctamente")
    }else if (seguro == "2"){
        alert("Opción no agregada")
    } else {
        alert("Opción incorrecta, volviendo al menu Principal")
        }
    }} 
    else if (menu1 == 2){
        let eliminar = prompt("Ingrese el ingrediente a eliminar");
        ingredientes.splice(eliminar - 1);
        alert("Ingrediente eliminado")
    };
    
        }

//Desarrollado por: Luis Angel Gelvez Delgado - C.C:1.098.071.730