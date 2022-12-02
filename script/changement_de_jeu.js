$(document).ready(function() {    
    $(".button-start").click(function() {
        if ($("#Accueil").hasClass("active"))
        {
            $("#Accueil").removeClass("active").addClass("inactive");
            $("#choix").removeClass("inactive").addClass("active");
        }
    });

    $(".button_paires").click(function(){
        alert("Choix du jeux paires")
    });
});