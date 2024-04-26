//Définitions variables du main&nav
const mainHero_div = document.getElementById("mainHero_div");
const h1_Balise = document.getElementById("titrePrincipal");
const h1_TitreSecondaire = document.getElementById("h1_sectionSecondaire");
// Utilisation des variables

// 1. Background image du hiker
mainHero_div.style.backgroundImage = "url('assets/img/cours1_bgHero.jpg')";
mainHero_div.style.backgroundSize = "100% 100%";
mainHero_div.style.backgroundRepeat = "no-repeat";
h1_Balise.style.color = "#edb47c";
h1_sectionSecondaire.style.color = "#edb47c";

//Animation LOGO&Titre_h1
gsap.from("h1", {duration: 5, x: "-1000", ease:"bounce"});
