//solo es la pagina de productos//

// let preguntaNombre = prompt("Cual es tu nombre ?");
// let respuestaNombre = (`Bienvenid@ ${preguntaNombre} a Makeup LC`); 
// alert(respuestaNombre);

// let informacion = ("Estas en seccion productos Makeup LC, espero que puedas elegir algo que te guste... Nuevamente bienvenid@"); 
// alert(informacion);

/* functiones de orden superior */

console.log("Probando la consola");

const articulos = [
    { id: 1, producto: "base de maquillaje", precio: 30.00, img:"../img/imagenes-productos/1.png" },
    { id: 2, producto: "corrector de ojeras", precio: 20.00, img:"../img/imagenes-productos/2.png" },
    { id: 3, producto: "corrector de ojeras colores", precio: 25.32, img:"../img/imagenes-productos/3.png" },
    { id: 4, producto: "polvo compacto", precio: 35.00, img:"../img/imagenes-productos/4.png" },
    { id: 5, producto: "kit de brochas", precio: 42.00, img:"../img/imagenes-productos/5.png" },
    { id: 6, producto: "esponja de agarre", precio: 15.00, img:"../img/imagenes-productos/6.png" },
    { id: 7, producto: "iluminadores", precio: 28.40, img:"../img/imagenes-productos/7.png" },
    { id: 8, producto: "pestañina", precio: 37.50, img:"../img/imagenes-productos/8.png" },
    { id: 9, producto: "delineador", precio: 31.20, img:"../img/imagenes-productos/9.png" },
    { id: 10, producto: "accesorio pestañina", precio: 15.50, img:"../img/imagenes-productos/10.png" },
    { id: 11, producto: "maquillaje de cejas", precio: 22.25, img:"../img/imagenes-productos/11.png" },
    { id: 12, producto: "brillo labial", precio: 25.40, img:"../img/imagenes-productos/12.png" },
    { id: 13, producto: "rubor", precio: 30.00, img:"../img/imagenes-productos/13.png" },
    { id: 14, producto: "rubor en crema", precio: 30.50, img:"../img/imagenes-productos/14.png" },
    { id: 15, producto: "labial cromaticos", precio: 28.50, img:"../img/imagenes-productos/15.png" },
    { id: 16, producto: "kit maquillaje niñas", precio: 35.00, img:"../img/imagenes-productos/16.png" },
    { id: 17, producto: "sombras de colores", precio: 42.00, img:"../img/imagenes-productos/17.png" },
    { id: 18, producto: "sombras nude", precio: 38.00, img:"../img/imagenes-productos/18.png" },
];

let idCarrito = [];
localStorage.clear();




function cargarArticulos(articulos, id){
  let variable = document.getElementById(id);
  articulos.forEach(articulo =>{
    variable.innerHTML+= `
    <div class="col-lg-4 text-center product-item">
            <div class="product-title">
              <h5>${articulo.producto}</h5>
            </div>
            <img src="${articulo.img}" alt="galeria productos">
            <div class="botones">
              <div class="product-precio py-3">
                <i class="fa-solid fa-coins"></i></li><span>$${articulo.precio}</span>
              </div>          
              <span class="class text-center small"></span>
              <button id="boton${articulo.id}" type="button" class="btn btn-outline-dark btn-sm ">Agregar</button>
            </div>
          </div>
    `;
 } )

  articulos.forEach(item =>{
    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => ejecutar(item.id));
 })
}  

function cargarArticulosDelCarrito(articulos, id){
  let variable = document.getElementById(id);
  let total = 0;
  let mensaje = "";
  articulos.forEach(articulo =>{
    // mensaje+= `${articulo.producto} $${articulo.precio}\n`;
    
    variable.innerHTML+= `
    <p>${articulo.producto} $${articulo.precio}
    <br>
    </p>
    
    `;
    total+=articulo.precio;
  })
  total = total.toFixed(2);
 mensaje+=`\nTotal: $${total}`
 variable.innerHTML+=`
 <div><p>${mensaje}</p></div>
 `
;
 
}  

cargarArticulos(articulos, "contenedor");

function eliminarElemento(){
  imagen = document.getElementById("contenedor");	
  if (!imagen){
    console.log("El elemento selecionado no existe");
  } else {
    imagen.innerHTML= "";
  }}





function alertaPrueba(){
  let arregloTemporal = JSON.parse(localStorage.getItem("arreglo"));
  let arregloCarrito = [];
  console.log(arregloTemporal);

  arregloTemporal.forEach(id =>{
    arregloCarrito.push(articulos.find(item => item.id ===id));
  })
  eliminarElemento();
  cargarArticulosDelCarrito(arregloCarrito, "contenedorCarrito");
  console.log(arregloCarrito);

  quitarCarrito();
}

function quitarCarrito() {
  let titulo = document.getElementById("titulo");
  titulo.innerHTML = "Carrito";

  let boton = document.getElementById("divCarrito");
  boton.innerHTML = "";
}


let botonCarrito = document.getElementById("idCarrito");
botonCarrito.addEventListener("click",() => alertaPrueba());
//     boton.addEventListener("click", () => ejecutar(item.id));


 



 function ejecutar(id){
  console.log(`El articulo ${id} ha sido agregado exitosamente`);
  idCarrito.push(id);
  localStorage.clear();
  localStorage.setItem("arreglo", JSON.stringify(idCarrito));
 }




/* 
   <div class="col-lg-4 text-center product-item">
            <div class="product-title">
              <h5>Base de Maquillaje</h5>
            </div>
            <img src="../img/imagenes-productos/1.png" alt="galeria productos">
            <div class="botones">
              <div class="product-precio py-3">
                <i class="fa-solid fa-coins"></i></li><span>$30.00</span>
              </div>          
              <span class="class text-center small"></span>
              <button type="button" class="btn btn-outline-dark btn-sm ">Comprar</button>
            </div>
          </div>

          
*/





//find//
/*
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

alert(mensaje2); */