$(document).ready(function() {
  $("#search").click(function() {
    $(".menu-item").addClass("hide-item");
    $(".search-form").addClass("active");
    $(".close").addClass("active");
    $("#search").hide();
  });
  $(".close").click(function() {
    $(".menu-item").removeClass("hide-item");
    $(".search-form").removeClass("active");
    $(".close").removeClass("active");
    $("#search").show();
  });
});
function resettext() {
  document.getElementById("myform").reset();
}
