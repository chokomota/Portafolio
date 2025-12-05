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

/* ===============================
   Modal proyectos
   =============================== */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalLink = document.getElementById("modal-link");
  const modalCloseBtn = document.getElementById("modal-close");
  const proyectosContainer = document.getElementById("proyectos-container");

  if (!modal || !modalTitle || !modalImage || !modalDescription || !modalLink) {
    console.warn("Modal: faltan elementos en el DOM. Revisa el HTML del modal.");
    return;
  }

  // Evita scroll de fondo cuando modal está abierto
  function disableBodyScroll() { document.body.style.overflow = "hidden"; }
  function enableBodyScroll() { document.body.style.overflow = ""; }

  // openModal acepta: id (si existe), o índice numérico
  window.openModal = function(identifier) {
    let proyecto;

    // si es número (o string numérico), lo tratamos como índice
    const idx = Number(identifier);
    if (!Number.isNaN(idx) && proyectos[idx]) {
      proyecto = proyectos[idx];
    } else {
      // si existe campo id en objetos, lo buscamos por id
      proyecto = proyectos.find(p => p && (p.id === identifier || p.id === idx));
    }

    // fallback: si no encontramos, intentamos buscar por título (útil en pruebas)
    if (!proyecto && typeof identifier === "string") {
      proyecto = proyectos.find(p => p && p.titulo && p.titulo.toLowerCase() === identifier.toLowerCase());
    }

    if (!proyecto) {
      console.warn("openModal: proyecto no encontrado para:", identifier);
      return;
    }

    // Rellenar contenido del modal (seguro)
    modalTitle.textContent = proyecto.titulo || "Proyecto";
    modalDescription.textContent = proyecto.descripcion || "";
    modalLink.href = proyecto.link || "#";

    if (proyecto.imagen) {
      modalImage.src = proyecto.imagen;
      modalImage.alt = proyecto.titulo || "Imagen del proyecto";
      modalImage.style.display = ""; // mostrar si estaba oculto
    } else {
      modalImage.style.display = "none";
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    disableBodyScroll();
  };

  // Cerrar modal
  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    enableBodyScroll();
  }

  // Botón cerrar
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  // Cerrar click fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Cerrar con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  /* --- Opcional: delegación de evento en el contenedor para botones sin onclick inline ---
     Si tus tarjetas se generan con un botón que tenga:
       <button class="btn-proyecto" data-index="0">Ver más</button>
     entonces este listener permitirá abrir modal sin onclick inline.
     Si prefieres seguir usando onclick inline en proyectos.js, puedes omitirlo.
  */
  if (proyectosContainer) {
    proyectosContainer.addEventListener("click", (e) => {
      const btn = e.target.closest && e.target.closest(".btn-proyecto");
      if (!btn) return;
      const dataIdx = btn.getAttribute("data-index");
      const dataId = btn.getAttribute("data-id");
      if (dataIdx !== null) {
        openModal(Number(dataIdx));
      } else if (dataId !== null) {
        openModal(dataId);
      } else {
        // si no hay atributos data, pero botón fue creado con onclick inline, no hacemos nada
      }
    });
  }
});
