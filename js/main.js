/* ===============================
   Scroll suave para links del header
   =============================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        const destino = document.querySelector(link.getAttribute("href"));
        if (destino) {
            e.preventDefault();
            destino.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});


/* ===============================
   Botones de la sección Home
   =============================== */

// Botón "Sobre mí"
const btnSobreMi = document.getElementById("btnSobreMi");
if (btnSobreMi) {
    btnSobreMi.addEventListener("click", () => {
        document.querySelector("#about").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Botón "Ver Proyectos"
const btnVerProyectos = document.getElementById("btnVerProyectos");
if (btnVerProyectos) {
    btnVerProyectos.addEventListener("click", () => {
        document.querySelector("#proyectos").scrollIntoView({
            behavior: "smooth"
        });
    });
}


/* ===============================
   Efecto básico de aparición al hacer scroll
   =============================== */

const elementos = document.querySelectorAll("section, .home-content, .home-img");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});
