//!  Sidebar  !// 
setTimeout(function () {
    $('.loader-bg').fadeToggle(100);
}, 2000);

//!  Header Sticky  !// 
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
});

//!  Sidebar  !// 
var t1 = new TimelineMax({
    paused: true
});

t1.to("#sidebar", 0.4, {
    right: "0%",
});

t1.staggerFrom(".sidebar-link, .fas", 0.4, {
    opacity: 0
}, 0.1, "-=0.2");

t1.reverse();

$(document).on("click", "#sidebar-open", function () {
    t1.reversed(!t1.reversed());
});

$(document).on("click", "#sidebar-close", function () {
    t1.reversed(!t1.reversed());
});