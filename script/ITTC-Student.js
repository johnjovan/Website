$(document).ready(function () {
  $("#search").click(function () {
    $(".menu-item").addClass("hide-item");
    $(".search-form").addClass("active");
    $(".close").addClass("active");
    $("#search").hide();
    $("#sign-in").hide();
  });
  $(".close").click(function () {
    $(".menu-item").removeClass("hide-item");
    $(".search-form").removeClass("active");
    $(".close").removeClass("active");
    $("#search").show();
    $("#sign-in").show();
  });
});

$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("active");
    $("nav").toggleClass("active");
    // NOT FINISH //
    $(".icon").hide();
  }); // NOT FINISH //
  $("#bar").click(function () {
    $(".icon").show();
  });
});


function resettext() {
  document.getElementById("myform").reset();
}