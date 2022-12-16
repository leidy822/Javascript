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
let busqueda = articulos.find(item => item.producto.toUpperCase() === pregunta.toUpperCase());

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

let arr = [];


let flag = true;

// se ejecuta si flag = verdadero;
while(flag){
    let producto = prompt(`Que producto deseas ${preguntaNombre}`);
    let cantidad = prompt(" Cuantos productos deseas de esta unidad?");
    arr.push({producto, cantidad});
    let seguir = prompt("Desea seguir comprando? Ingrese Y para si y N para no.");
    if(seguir === 'N'){
        flag = false; // si no quiero seguir comprando, necesito que el flag sea falso
    }
}

let mensaje = "";
let precioTotal = 0;

for(let i=0; i<arr.length; i++){
let art = articulos.find(item => item.producto === arr[i].producto);

mensaje+=`${art.producto} x ${arr[i].cantidad} precio por unidad ${art.precio}\n`;
precioTotal+= (art.precio*arr[i].cantidad); // 15 *3
}

let mensaje2 = `Factura digital\n${mensaje}\nPrecio total = $${precioTotal}`;

alert(mensaje2);




