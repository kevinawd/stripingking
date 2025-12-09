const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("elementos");
const overlay = document.getElementById("overlay");

let lastScroll = 0;

function disableScroll() {
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("scroll", lockScroll, { passive: false });
}

function enableScroll() {
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
    window.removeEventListener("scroll", lockScroll);
}

function preventScroll(e) {
    e.preventDefault();
}

function lockScroll() {
    window.scrollTo(lastScrollX, lastScrollY);
}

let lastScrollX = 0;
let lastScrollY = 0;

menuBtn.addEventListener("click", () => {
    lastScrollX = window.scrollX;
    lastScrollY = window.scrollY;
    disableScroll();
    navLinks.style.transform = "translate(0)";
    overlay.style.display = "block";
});

function cerrarMenu() {
    enableScroll();
    navLinks.style.transform = "translateX(100%)";
    overlay.style.display = "none";
}

overlay.addEventListener("click", cerrarMenu);

const links = navLinks.querySelectorAll("a");
links.forEach(link => link.addEventListener("click", cerrarMenu));

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) navbar.style.top = "-80px";
    else navbar.style.top = "0";
    lastScroll = currentScroll;
});
