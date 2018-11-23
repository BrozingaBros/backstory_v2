var menuButton = document.getElementById("menu-btn");
menuButton.addEventListener("click", function(){
   var menu = document.getElementById("menu");
   menu.classList.toggle("nav-body-list-wrapper--shown");
});

$("#slideshow > figure:gt(0)").hide();

setInterval(function() {
    $('#slideshow > figure:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
},  4000);