var menuButton = document.getElementById("menu-btn");
menuButton.addEventListener("click", function(){
   var menu = document.getElementById("menu");
   menu.classList.toggle("nav-body-list-wrapper--shown");
});

$(document).ready(function () {
  $("#slideshow").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    dots: false,
    prevArrow: false,
    nextArrow: false
  });
});