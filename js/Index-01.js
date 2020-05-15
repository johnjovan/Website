setTimeout(function () {
    $('.loader-bg').fadeToggle(100);
}, 2000);

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
});