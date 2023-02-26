const hamburguesas = [
    {
        nombre: "remolacha",
        precio: 700,
        stock: {
            listas: 2,
        }
    },
    {
        nombre: "porto",
        precio: 800,
        stock: {
            listas: 0,
        }
    },
    {
        nombre: "not chicken",
        precio: 900,
        stock: {
            listas: 1,
        }
    },
    {
        nombre: "carne",
        precio: 950,
        stock: {
            listas: 3,
        }
    },
]

function buscarHamburguesa(dato){
    const indice = hamburguesas.findIndex(hamburguesas => hamburguesas.nombre == dato);
    return hamburguesas[indice];
}

function sumador(dato){
    const hamburguesa = buscarHamburguesa(dato);
    hamburguesa.stock.listas -= 1;
    return hamburguesa.precio;
}


function stock (stock){

}

const animacionMenu = document.querySelectorAll(".burgers");
animacionMenu.forEach((e)=>{
    e.addEventListener("mouseover", () =>{
        console.log("move");
        e.classList.add("animacionMenu");
    });
    e.addEventListener("onmouseout", () =>{
        console.log("move out");
        e.classList.remove("animacionMenu");
    });
});

const carrito = [];
let precioTotal = 0;

//BOTON DE HACER PEDIDO//
const botonPedido = document.querySelector(".botonPedido");
botonPedido.classList.add("animate__animated");
botonPedido.classList.add("animate__jackInTheBox");
botonPedido.onclick = () => {

let hamburguesa = false;
let texto = prompt("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken (si desea salir escriba: salir)").toLowerCase();

if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken") || (texto == "salir")){
    hamburguesa = true;
}else{
    alert ("No existe tal hamburguesa");
    while(hamburguesa == false){
        texto = prompt("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken (si desea salir escriba: salir)").toLowerCase();

        if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken") || (texto == "salir")){
            hamburguesa = true;
        }else{
            alert ("No existe tal hamburguesa")
        }
    }
}

while((texto != "salir")){
    let key = true;
    while(hamburguesa == true){
        carrito.push(buscarHamburguesa(texto));
        precioTotal += sumador(texto);

        alert ("Que más?");
        texto = prompt("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken (si desea salir o finalizar escriba: salir o finalizar)").toLowerCase();

        if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken")){
            continue;
        }else if((texto == "salir") || (texto == "finalizar")){
            hamburguesa = false;
        }else{
            alert ("No existe tal hamburguesa");
            key = true;
            while(key === true){
                texto = prompt ("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken (si desea salir o finalizar escriba: salir o finalizar)").toLowerCase();
                
                if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken")){
                    key = false;
                }else if((texto == "salir") || (texto == "finalizar")){
                    key = false;
                    hamburguesa = false;
                }else{
                    alert ("No existe tal hamburguesa");
                }
            }
        }
    }
    break;
}

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

guardarLocal("listaCarrito", JSON.stringify(carrito));

if (texto == "salir"){
    precioTotal = 0;
    alert ("Vuelva prontos!");
};

};

//CARRITO
const botonCarrito = document.querySelector(".cart");
botonCarrito.onclick = () => {
    const mostrarCarrito = () => {
        let mensaje = `Carrito: `;
        carrito.forEach((el)=>{
            mensaje += `
                        ${el.nombre} $${el.precio}
                    `;
        });
        mensaje += `El total es: $ " ${precioTotal}`;
    };
};