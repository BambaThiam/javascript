// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const nav = document.getElementById("navbar");
const improv = document.getElementById("imgImprovise");
const pop = document.getElementById("popup");
// console.log(nav, improv, pop);

let lastScrollY = 0;
let scrollValue =
  (window.screenY + window.innerHeight) / document.body.offsetHeight;
let playOnce = true;

window.addEventListener("scroll", () => {
  // Navbar
  if (window.scrollY < lastScrollY) {
    nav.style.height = "90px";
  } else {
    nav.style.height = "45px";
  }
  lastScrollY = window.scrollY;

  //Image
  if (scrollValue < 0.45) {
    imgImprovise.style.transform = "none";
    imgImprovise.style.opacity = 1;
  }

  //Popup
  if (scrollValue < 0.85 && playOnce) {
    popup.style.transform = "none";
    popup.style.opacity = 1;
    playOnce = false;
  }
});
closeBtn.addEventListener("click", () => {
  pop.style.transform = 500;
  pop.style.opacity = 0;
});
