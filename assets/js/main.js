// TRAVAIL1_TEXTE_LOREM_HOVER,ONCLICK,1STCHILD, CLASSLIST
// Déclaration des variables du body:
const mainContainer = document.getElementsByClassName("container");
const h1_Balise_Titre = document.body.querySelector("h1");
const leadParagraphe = document.getElementById('lead');
const p_Balise_Suivantlead = document.querySelectorAll("p")[1];


// Les 2 li :
const li_Balises = document.getElementsByClassName("list-group-item");
const li_1 = li_Balises[0];
const li_2 = li_Balises[1];

// Fonction à appeler sur le onHover du titre ou avec un event lister que nous utilisons ici :

h1_Balise_Titre.addEventListener("mouseenter", function () {

  h1_Balise_Titre.style.cursor = "pointer";
  p_Balise_Suivantlead.style.color = "gray";
  p_Balise_Suivantlead.style.textAlign = "right";

  // fonction qui permet au texte de rester noir, celle-ci n'est qu'appelée si mouseenter est activé.
  h1_Balise_Titre.addEventListener("mouseout", function () {

    p_Balise_Suivantlead.style.color = "black";
    p_Balise_Suivantlead.style.textAlign = "start";
  });
});
li_1.type = "button";
li_1.addEventListener("mouseenter",function () {

  document.body.dataset.bstheme= "dark";

});

li_2.addEventListener("mouseenter",function () {

  document.body.dataset.bstheme= "light";

});
// Les deux toggle ajoute la classe au body mais la couleur ne change pas, à faire
console.log(p_Balise_Suivantlead,leadParagraphe,li_2,li_1,mainContainer[0])
