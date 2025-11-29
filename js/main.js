/*Scroll suave entre secciones*/

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
        });
    });
});


/*Navbar = resaltar seccion activa*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


/*Animacion al hacer sctroll (Fade + slide)*/

const scrollElements = document.querySelectorAll(".scroll-anim");

const elementInView = (el, offset = 120) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight - offset);
};

const displayScrollElement = el => {
    el.classList.add("scrolled");
};

const hideScrollElement = el => {
    el.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener("scroll", handleScrollAnimation);


/*Boton de scroll down del home*/

const scrollDownBtn = document.querySelector(".scroll-down");
if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", () => {
        const aboutSection = document.querySelector("#sobre-mi");
        if (aboutSection) {
            window.scrollTo({
                top: aboutSection.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
}


/*Ready message (debugging)*/
console.log("main.js cargado correctamente.");