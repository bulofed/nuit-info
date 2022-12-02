$(document).ready(function() {    
    $(".button-start").click(function() {
        if ($("#Accueil").hasClass("active"))
        {
            $("#Accueil").removeClass("active").addClass("inactive");
            $("#choix").removeClass("inactive").addClass("active");
        }
    });

    $(".button_paires").click(function(){
        $("#choix").removeClass("active").addClass("inactive")
        if ($("#paires").hasClass("inactive"))
        {
            if ($("body").hasClass("Byellow"))
            {
                $("body").removeClass("Byellow").addClass("Bblue");
                $("#Main_circle").removeClass("C_yellow").addClass("C_blue")
                $("#paires").removeClass("inactive").addClass("active")
            }
            if ($("body").hasClass("Bpink"))
            {
                $("body").removeClass("Bpink").addClass("Bblue");
                $("#Main_circle").removeClass("C_pink").addClass("C_blue")
                $("#paires").removeClass("inactive").addClass("active")
            }
        }
    });

    $(".button_puzzle").click(function(){
        if ($("#puzzle").hasClass("inactive"))
        {
            if ($("body").hasClass("Byellow"))
            {
                $("body").removeClass("Byellow").addClass("Bgreen");
                $("#Main_circle").removeClass("C_yellow").addClass("C_green")
            }
            if ($("body").hasClass("Bblue"))
            {
                $("body").removeClass("Bblue").addClass("Bgreen");
                $("#Main_circle").removeClass("C_blue").addClass("C_green")
            }
        }
    });

    $(".button_labyrinthe").click(function(){
        if ($("#labyrinthe").hasClass("inactive"))
        {
            if ($("body").hasClass("Byellow"))
            {
                $("body").removeClass("Byellow").addClass("Bpink");
                $("#Main_circle").removeClass("C_yellow").addClass("C_pink")
            }
            if ($("body").hasClass("Bblue"))
            {
                $("body").removeClass("Bblue").addClass("Bpink");
                $("#Main_circle").removeClass("C_blue").addClass("C_pink")
            }
        }
    });
});