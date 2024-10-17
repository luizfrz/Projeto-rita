$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});
var aperta = document.getElementById("aperta");

aperta.addEventListener("click",function() {

   alert("Jesus te ama!") 
});
