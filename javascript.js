//solo es la pagina de productos//

let preguntaNombre = prompt("Cual es tu nombre ?");
let respuestaNombre = (`Bienvenid@ ${preguntaNombre} a Makeup LC`); 
alert(respuestaNombre);

let informacion = ("Estas en seccion productos Makeup LC, espero que puedas elegir algo que te guste... Nuevamente bienvenid@"); 
alert(informacion);

/* functiones de orden superior */

const articulos = [
    { id: 1, producto: "base de maquillaje", precio: 30.00 },
    { id: 2, producto: "corrector de ojeras", precio: 20.00 },
    { id: 3, producto: "corector de ojeras colores", precio: 25.32 },
    { id: 4, producto: "polvo compacto", precio: 35.00 },
    { id: 5, producto: "kit de brochas", precio: 42.00 },
    { id: 6, producto: "esponja de agarre", precio: 15.00 },
    { id: 7, producto: "iluminadores", precio: 28.40 },
    { id: 8, producto: "pestañina", precio: 37.50 },
    { id: 9, producto: "delineador", precio: 31.20 },
    { id: 10, producto: "accesorio pestañina", precio: 15.50 },
    { id: 11, producto: "maquillaje de cejas", precio: 22.25 },
    { id: 12, producto: "brillo labial", precio: 25.40 },
    { id: 13, producto: "labial cromaticos", precio: 28.50 },
    { id: 14, producto: "rubor", precio: 30.00 },
    { id: 15, producto: "rubor en crema", precio: 30.50 },
    { id: 16, producto: "labial cromaticos", precio: 28.50 },
    { id: 17, producto: "kit maquillaje niñas", precio: 35.00 },
    { id: 18, producto: "sombras de colores", precio: 42.00 },
    { id: 19, producto: "sombras nude", precio: 38.00 },
];

//find//

let pregunta = prompt(`Que producto buscas ${preguntaNombre}?`);
let busqueda = articulos.find(item => item.producto === pregunta );

let mensajeB = `
    Nombre : ${busqueda.producto}
    Precio : $${busqueda.precio}
`;
alert(mensajeB);

//filter//

let pregunta2 = parseInt(prompt(`Que valor maximo buscas ${preguntaNombre}?`));
let busqueda2 = articulos.filter(item => item.precio < pregunta2);
busqueda2.forEach(item => {
    let mensajeB2 =`
    Nombre : ${item.producto}
    Precio : $${item.precio}
`;
alert(mensajeB2);
});

let producto = prompt(`Que producto deseas ${preguntaNombre}`);
let cantidad = prompt(" Cuantos productos deseas de esta unidad?");
const precio = articulos.map(item => item.precio);
const articulo = articulos.map(item => item.producto);


function compra(precio, articulo) {
    let resultado = articulo * precio;
};
let respuesta = (`Tu valor es ${resultado}`);
alert(respuesta)


