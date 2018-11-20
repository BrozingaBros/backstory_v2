var menuButton = document.getElementById("menu-btn");
menuButton.addEventListener("click", function(){
   var menu = document.getElementById("menu");
   menu.classList.toggle("nav-body-list-wrapper--shown");
});