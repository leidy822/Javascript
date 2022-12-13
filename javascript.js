//solo es la pagina de productos//

let preguntaNombre = prompt("Cual es tu nombre ?");
let respuestaNombre = (`Bienvenid@ ${preguntaNombre} a Makeup LC`); 
alert(respuestaNombre);

let informacion = ("EstLeidyas en seccion productos Makeup LC, espero que puedas elegir algo que te guste... Nuevamente bienvenid@"); 
alert(informacion);

/* functiones de orden superior */

const articulos = [
    { id: 1, producto: "Base de Maquillaje", precio: 30.00 },
    { id: 2, producto: "Corrector de Ojeras", precio: 20.00 },
    { id: 3, producto: "Corector de Ojeras colores", precio: 25.32 },
    { id: 4, producto: "Polvo Compacto", precio: 35.00 },
    { id: 5, producto: "Kit de Brochas", precio: 42.00 },
    { id: 6, producto: "Esponja de Agarre", precio: 15.00 },
    { id: 7, producto: "Iluminadores", precio: 28.40 },
    { id: 8, producto: "Pestañina", precio: 37.50 },
    { id: 9, producto: "Delineador", precio: 31.20 },
    { id: 10, producto: "Accesorio pestañina", precio: 15.50 },
    { id: 11, producto: "Maquillaje de Cejas", precio: 22.25 },
    { id: 12, producto: "Brillo labial", precio: 25.40 },
    { id: 13, producto: "Labial Cromaticos", precio: 28.50 },
    { id: 14, producto: "Rubor", precio: 30.00 },
    { id: 15, producto: "Rubor en crema", precio: 30.50 },
    { id: 16, producto: "Labial Cromaticos", precio: 28.50 },
    { id: 17, producto: "Kit maquillaje niñas", precio: 35.00 },
    { id: 18, producto: "sombras de colores", precio: 42.00 },
    { id: 19, producto: "sombras nude", precio: 38.00 },
];

let pregunta = prompt(`Que producto buscas ${preguntaNombre}?`);
let busqueda = articulos.find(item => item.articulos === producto);

let mensajeB = `
    Nombre : ${busqueda.producto}
    Precio : $${busqueda.precio}
`;

alert(mensajeB);


