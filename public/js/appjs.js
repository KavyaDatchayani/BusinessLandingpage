document.addEventListener("DOMContentLoaded", function () {

    const menubar = document.getElementById("menubar");
    const navLinks = document.querySelector(".nav-links")
    const navlinka = document.querySelectorAll(".nav-links a");

    const line1 = document.getElementById("lineone");
    const line2 = document.getElementById("linetwo");
    const line3 = document.getElementById("linethree");

    const arrow = document.querySelector('.uparrow');

    const nav = document.querySelector("#navbar");
    let oldscroll = window.scrollY

    menubar.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        line1.classList.toggle("slideright");
        line2.classList.toggle("gone");
        line3.classList.toggle("slideleft");
    })

    navlinka.forEach(links => {
        links.addEventListener("click", function () {
            navLinks.classList.toggle("show");
            line1.classList.toggle("slideright");
            line2.classList.toggle("gone");
            line3.classList.toggle("slideleft");
        })
    })

    window.addEventListener("scroll", () => {
        arrow.style.display = window.scrollY > 200 ? "block" : "none";
    })

    arrow.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.onscroll = function () {
        const currentScroll = window.scrollY;
        nav.style.top = oldscroll > currentScroll ? "0" : "-100%";
        oldscroll = currentScroll;
    }

});



