const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");


// Open and close mobile menu
menuToggle.addEventListener("click", function () {

    mobileNav.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (mobileNav.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close mobile menu after clicking a link
const mobileLinks = mobileNav.querySelectorAll("a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileNav.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// Close menu when clicking outside
document.addEventListener("click", function (event) {

    if (
        mobileNav.classList.contains("open") &&
        !mobileNav.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        mobileNav.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});