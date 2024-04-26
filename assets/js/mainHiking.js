// Définir tvariables du DOM
console.log(document.documentURI)

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


// Un fade effect sur un mouse enter
gsap.registerEffect({
    name: "fade",
    defaults: {duration: 3}, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    }
});

//utilisation sur le logo qui est la seule image pour l'instant
//gsap.effects.fade("img");

document.querySelectorAll("img").forEach(function(box) {
    box.addEventListener("mouseenter", function() {
        gsap.effects.fade(this);
    });
});

// Syntaxe gsap.to("la balise ou .class ou #id", {duration: 5, x: "distanceEx -1000 ou 50%", y: "555", function : "slide"})

const allButtons = document.getElementsByClassName("button");
gsap.to("button, input, nav", { duration: "3" ,rotation: 360, x: -10, yPercent: 25 });
/* L'effet yoyo 
gsap.to(".box", { 
  rotation: 360,
  x: '100vw',
  xPercent: -100,
  // special properties
  duration: 2, // how long the animation lasts
  repeat: 2, // the number of repeats - this will play 3 times
  yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
});
*/
