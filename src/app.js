(function () {

    const bar = document.querySelector(".fa-bars");
    const navLink = document.querySelector(".header__navlink");

    bar.addEventListener("click", () => {
        navLink.classList.toggle("toggle");
    })

})();