$(document).ready(function () {
  $(".button-start").click(function () {
    if ($("#Accueil").hasClass("active")) {
      $("#Accueil").removeClass("active").addClass("inactive");
      $("#choix").removeClass("inactive").addClass("active");
    }
  });

  $(".button_paires").click(function () {
    if ($("#container-mem").hasClass("container-memory")) {
      $("#container-mem")
        .removeClass("container-memory")
        .addClass("container-memory-visible");
    }

    if ($("#background").hasClass("background")) {
      $("#background")
        .removeClass("background")
        .addClass("background-invisible");
    }
  });

  $(".button_puzzle").click(function () {
    alert("Choix du jeux puzzle");
  });

  $(".button_labyrinthe").click(function () {
    alert("Choix du jeux labyrinthe");
  });
});
