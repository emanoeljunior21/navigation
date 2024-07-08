const nav = document.querySelector(".tab-container");

const offset = nav.offsetTop;

window.addEventListener("scroll", function () {
    if (window.scrollY >= offset) {
        nav.classList.add("menu");
    } else {
        nav.classList.remove("menu");
    }
});