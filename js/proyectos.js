/*Lista de proyectos (editable)*/
const proyectos = [
    {
        titulo: "Portafolio Web",
        descripcion: "Página web personal creada con HTML, CSS y JavaScript puro.",
        imagen: "assets/img/proyecto1.png",
        link: "https://github.com/chokomota/Portafolio"
    },

    {
        titulo: "ejemplo 2",
        descripcion: "miau",
        imagen: "assets/img/proyecto2.png",
        link: "https://github.com/usuario/sistema"
    }
];


/*Referencia al contenedor*/
const contenedorProyectos = document.getElementById("proyectos-container");


/*Generación dinámica de tarjetas
*/
function mostrarProyectos() {

    proyectos.forEach((proyecto) => {

        // Crear la tarjeta general
        const card = document.createElement("div");
        card.classList.add("proyecto-card");

        // Insertar estructura interna
        card.innerHTML = `
            <div class="proyecto-img">
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            </div>

            <div class="proyecto-info">
                <h3>${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
                <a href="${proyecto.link}" target="_blank" class="btn-proyecto">Ver proyecto</a>
            </div>
        `;

        // Agregar la tarjeta al contenedor
        contenedorProyectos.appendChild(card);
    });
}


/*Inicialización*/
mostrarProyectos();
