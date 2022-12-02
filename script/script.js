$(document).ready(function() {    
    $("#li_accueil").click(function() {
        if ($("#Accueil").hasClass("inactive"))
        {
            $("#Accueil").removeClass("inactive").addClass("active");
        }
        else
        {
            $("#Accueil").removeClass("active").addClass("inactive");
        }
    });
});