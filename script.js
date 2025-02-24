document.addEventListener("scroll", function () {
    const scrollToTop = document.getElementById("scrollToTop");
    if (window.scrollY > window.innerHeight) {
        scrollToTop.style.display = "block";
        scrollToTop.classList.add("uk-animation-fade");
    } else {
        scrollToTop.style.display = "none";
        scrollToTop.classList.remove("uk-animation-fade");
    }
});
