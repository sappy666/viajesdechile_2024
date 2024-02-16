$(function(){
    //---Esconde seccion destacados
    $(".destacados-fade").click(function(){
        $(".cartas").slideToggle("slow");
    });
    $(window).scroll(function(){
        //---cuando navbar esta sobre imagenes de carrusel
        if ($(this).scrollTop() > $(".header").height()-100){
            $(".navbar").addClass("bg-white");
            $(".navbar").removeClass("bg-transparent");
            $(".navbar").removeClass("navbar-dark");
            
        }
        //---Cuando navbar sale de las imagenes de carrusel
        if($(this).scrollTop() < $(".header").height()-100){
            $(".navbar").removeClass("bg-white");
            $(".navbar").addClass("bg-transparent");
            $(".navbar").addClass("navbar-dark");
        }
    });
});
//---inicia tooltip en toda la pagina---
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
}) 