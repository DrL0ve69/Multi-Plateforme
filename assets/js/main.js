// TRAVAIL1_TEXTE_LOREM_HOVER,ONCLICK,1STCHILD, CLASSLIST
// Déclaration des variables du body:
const mainContainer = document.getElementsByClassName("container");
const h1_Balise_Titre = document.body.querySelector("h1");
const h2_Balise_Titre = document.body.querySelector("h2");
const leadParagraphe = document.getElementsByClassName('lead');
const i_Balise_Childlead = document.querySelectorAll("i")[0];
const p_Pagraphes_All = document.querySelectorAll("p");


h2_Balise_Titre.addEventListener("mouseenter", () =>
{
h2_Balise_Titre.style.color = "white";
h2_Balise_Titre.style.backgroundColor = "black";
i_Balise_Childlead.style.color = "white";
i_Balise_Childlead.style.backgroundColor = "red";


  h2_Balise_Titre.addEventListener("mouseleave", () =>
  {
    h2_Balise_Titre.style.color = document.body.style.color;
    h2_Balise_Titre.style.backgroundColor = li_1.style.backgroundColor ;
    i_Balise_Childlead.style.color = document.body.style.color;
    i_Balise_Childlead.style.backgroundColor = li_1.style.backgroundColor;
  });

});

// Les 2 li :
const li_Balises = document.getElementsByClassName("list-group-item");
const li_1 = li_Balises[0];
const li_2 = li_Balises[1];

// Fonction à appeler sur le onHover du titre ou avec un event lister que nous utilisons ici :

h1_Balise_Titre.addEventListener("mouseover", function () {

  h1_Balise_Titre.style.cursor = "pointer";
  p_Pagraphes_All[1].style.color = "gray";
  p_Pagraphes_All[1].style.textAlign = "right";
  p_Pagraphes_All[1].style.animation = "slide, 3s ease-in-out, 1s ease-in-out,1,right";

  // fonction qui permet au texte de rester noir, celle-ci n'est qu'appelée si mouseenter est activé.
  h1_Balise_Titre.addEventListener("mouseleave", function () {

    p_Pagraphes_All[1].style.textAlign = "start";
    p_Pagraphes_All[1].style.color = document.body.style.color;
    p_Pagraphes_All[1].style.backgroundColor = document.body.style.backgroundColor;

  });

});


li_1.type = "button";
li_2.type = "button";
// répétition on peut mettre dans une boucle for
li_1.onclick = function ()
{
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  this.style.backgroundColor = "black";
  li_2.style.backgroundColor = "black";
  p_Pagraphes_All[1].style.color = document.body.style.color;
  p_Pagraphes_All[1].style.backgroundColor = document.body.style.backgroundColor;
  h2_Balise_Titre.style.color = document.body.style.color;
  h2_Balise_Titre.style.backgroundColor = li_1.style.backgroundColor ;
  i_Balise_Childlead.style.color = document.body.style.color;
  i_Balise_Childlead.style.backgroundColor = document.body.style.backgroundColor;



};
li_2.onclick = function ()
{
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  this.style.backgroundColor = "white";
  li_1.style.backgroundColor = "white";
  p_Pagraphes_All[1].style.color = document.body.style.color;
  p_Pagraphes_All[1].style.backgroundColor = document.body.style.backgroundColor;
  h2_Balise_Titre.style.color = document.body.style.color;
  h2_Balise_Titre.style.backgroundColor = li_1.style.backgroundColor ;
  i_Balise_Childlead.style.color = document.body.style.color;
  i_Balise_Childlead.style.backgroundColor = document.body.style.backgroundColor;
}

/*
li_1.addEventListener("mouseenter",function () {

  document.body.dataset.bstheme= "dark";

});

li_2.addEventListener("mouseenter",function () {

  document.body.dataset.bstheme= "light";

});

 mettre dans une fonction le tout entouré d'un if ou d'un while

*/

// Les deux toggle ajoute la classe au body mais la couleur ne change pas, à faire
console.log(i_Balise_Childlead,leadParagraphe,li_2,li_1,mainContainer[0])
