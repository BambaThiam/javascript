// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : !important > id > classe > baliseHtml

let sd = document.querySelector("#side-bar");

let button = document.querySelector(".toggle-btn");
const content = document.querySelector(".content");

button.addEventListener("click", () => {
  //   sd.classList.add
  //   sd.classList.remove
  sd.classList.toggle("active"); //toogle met la classe si elle n'est mise et inversement
});

content.addEventListener("click", () => {
  sd.classList.remove("active");
});
