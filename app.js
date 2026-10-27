// 1. LISTA DE PRODUCTOS ESCOLARES (Puedes agregar más aquí fácilmente)
const listaEscolar = [
    { nombre: "Cuaderno Profesional Raya/Cuadro", precio: 26, icono: "📓" },
    { nombre: "Caja de Colores x12 (Dependiendo de la marca varían los precios)", precio: 45, icono: "🎨" },
    { nombre: "Juego de Geometría", precio: 30, icono: "📐" },
    { nombre: "Pegamento en Barra (Dependiendo de la marca varían los precios)", precio: 18, icono: "🧴" },
    { nombre: "Borrador de Migajón (Dependiendo de la marca varían los precios)", precio: 10, icono: "🧹" },
    { nombre: "Mochila Escolar", precio: 350, icono: "🎒" },
    { nombre: "Papel china", precio: 2, icono: "📄" },
    { nombre: "Papel crepé", precio: 8, icono: "📄" },
    { nombre: "Lapiceros punta Fina/Normal/Gruesa", precio: 7/6/7, icono: "✏️" },
    { nombre: "Pintura politec", precio: 17, icono: "🖌️" }
];

// 2. LISTA DE JUGUETES Y REGALOS (Puedes agregar más aquí fácilmente)
const listaJuguetes = [
    { nombre: "Peluche (Dependiendo del tamaño varía el precio)", precio: 170, icono: "🧸" },
    { nombre: "Termo Acero Inoxidable/Plastico (Dependiendo del material/tamaño varían los precios)", precio: 80, icono: "🥤" },
    { nombre: "Taza Decorada con Dulces", precio: 95, icono: "☕" },
    { nombre: "Juego de Mesa Familiar Uno,Baraja,Aejdrez", precio: 250, icono: "🎲" },
    { nombre: "Lámpara LED Kawaii", precio: 150, icono: "💡" },
    { nombre: "Carrito de Juguete Coleccionable", precio: 80, icono: "🚗" }
];

// Función para cargar los productos escolares en catalogo.html
function cargarEscolar() {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    listaEscolar.forEach(prod => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-producto";
        tarjeta.innerHTML = `
            <div class="imagen-placeholder">${prod.icono}</div>
            <h3>${prod.nombre}</h3>
            <p class="precio">$${prod.precio}.00 MXN</p>
            <button class="btn-comprar" onclick="pedirPorWhatsApp('${prod.nombre}', ${prod.precio})">Pedir por WhatsApp</button>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Función para cargar los juguetes y regalos en juguetes.html
function cargarJuguetes() {
    const contenedor = document.getElementById("contenedor-juguetes");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    listaJuguetes.forEach(prod => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-producto";
        tarjeta.innerHTML = `
            <div class="imagen-placeholder">${prod.icono}</div>
            <h3>${prod.nombre}</h3>
            <p class="precio">$${prod.precio}.00 MXN</p>
            <button class="btn-comprar" onclick="pedirPorWhatsApp('${prod.nombre}', ${prod.precio})">Pedir por WhatsApp</button>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Función para enviar el pedido directo a WhatsApp
function pedirPorWhatsApp(producto, precio) {
    let numeroWhatsApp = "4438616743"; // <--- REEMPLAZA ESTO CON TU NÚMERO REAL (ej: 521443...)
    let mensaje = `Hola! Me interesa comprar el siguiente producto de la papelería:%0A*${producto}*%0APrecio: $${precio}.00 MXN%0A%0A¿Lo tienen disponible para recoger en tienda?`;
    
    let url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, '_blank');
}

// Ejecutar al cargar cualquier página
window.onload = function() {
    cargarEscolar();
    cargarJuguetes();
};