var element = document.getElementById("secret");
const easterEgg = new Konami(() => element.classList.add("secret"));

$(document).ready(function() {    
    $(".button-start").click(function() {
        if ($("#Accueil").hasClass("active"))
        {
            $("#Accueil").removeClass("active").addClass("inactive");
            $("#choix").removeClass("inactive").addClass("active");
        }
    });
});