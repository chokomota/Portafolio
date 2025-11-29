/*Lista de proyectos*/
const proyectos = [
    {
        titulo: "Sistema de Gestión de Usuarios",
        descripcion: "Plataforma web full-stack para administrar usuarios, roles y permisos.",
        imagen: "assets/img/proyecto1.png",
        tecnologias: ["JavaScript", "HTML", "CSS", "Python", "Django"],
        linkDemo: "#",      //enlace a demo
        linkCodigo: "#"     //enlace a GitHub
    },
    {
        titulo: "E-Commerce Minimalista",
        descripcion: "Tienda online con carrito persistente y panel administrativo.",
        imagen: "assets/img/proyecto2.png",
        tecnologias: ["JavaScript", "CSS", "Node.js", "Express", "MongoDB"],
        linkDemo: "#",
        linkCodigo: "#"
    },
    {
        titulo: "App de Tareas con LocalStorage",
        descripcion: "Aplicación liviana para gestionar tareas con guardado local.",
        imagen: "assets/img/proyecto3.png",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        linkDemo: "#",
        linkCodigo: "#"
    }
];


/*Crear tarjetas dinamicamente*/
function cargarProyectos() {
    const grid = document.getElementById("projectsGrid");

    proyectos.forEach(p => {

        const card = document.createElement("div");
        card.classList.add("project-card", "scroll-anim");

        card.innerHTML = `
            <div class="project-img">
                <img src="${p.imagen}" alt="${p.titulo}">
            </div>

            <div class="project-info">
                <h3>${p.titulo}</h3>
                <p>${p.descripcion}</p>

                <div class="tech-list">
                    ${p.tecnologias.map(t => `<span>${t}</span>`).join("")}
                </div>

                <div class="project-buttons">
                    <a href="${p.linkDemo}" target="_blank" class="btn-demo">Ver Demo</a>
                    <a href="${p.linkCodigo}" target="_blank" class="btn-code">Código</a>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}



/*Ejecutar funcion*/ 
document.addEventListener("DOMContentLoaded", cargarProyectos);