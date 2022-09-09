//...........Selecteurs
//document.querySelector('h4').style.background = "yellow";
//const baliseHTML = document.querySelector("h4");

//...........Click envent

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

//questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// <div> > #id > .class > baliseHTML : ordre de priorité des balises etc.
//---------------------------------------------------

//..........Mouse Events
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-25%, -25%";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//---------------------------------------------
// KeyPress event (appui sur une touche)

const keypresscontainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3"; //sonne si on appui sur "z" (nom fichier audio p^pur l'ex.)
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "j") {
    keypresscontainer.style.background = "pink";
  } else if (e.key === "h") {
    keypresscontainer.style.background = "teal";
  } else {
    keypresscontainer.style.background = "red";
  }

  //ring(e.key) //lance le son
});

//---------------------------------------------------
// Scrool Event ------------

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//----------------------------------
// Form Events
const inputName = document.querySelector("input[type='text']");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});
select.addEventListener("input", (e) => {
  language = e.target.value;
  console.log(language);
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); //annule le changmeent de epage => fixe la page
  console.log("yes!!");
  if (cgv.checked) {
    //pas besoin de déclaer l'ID checkbox pareil pour les butons (exceptions)
    //inner HTML permet d'injection des balises # .textcontent qui affiche le contenu
    document.querySelector("form > div").innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Langage préféré : ${language}</h4>
        `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//----------------------------------

// load event-----------------------

//Tout ce qui a dedans se décalanche aprés le chargement de la page
window.addEventListener("load", () => {
  console.log("Document chargé!");
});

//-----------------------------------

//sélection multiple, ex. souhait même comportement pour plusieurs boutons
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//-----------------------------------
//addEventListener Vs onclick
document.body.onclick = () => {
  console.log("click");
};
//Voir correction pour les Usercapture, pour faire passer des choses avant...

console.log(navigator.userAgent);

//-----------------------------------
//stop propagation
questionContainer.addEventListener("click", (e) => {
  alert("Test !");
  e.stopPropagation();
}); // bloque la propagation

//removeEvenLister => savoir que ça existe

//-------------------------------------------
//BOM
//window.open("http://google.com", "cours", "height=600", "width=800"); //ouvre une fenetre
//window.close(); //ferme la fenetre

btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

let answer;
btn1.addEventListener("click", () => {
  answer = prompt("Entrez votre nom ?");
  questionContainer.innerHTML += `<h3>Bravo ${answer}. </h3>`;
});

// Timer, compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000); //joue la fonction dans 2 secondes

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//     <div class='box'>
//       <h2>Nouvelle Boite !</h2>
//     </div>`;
// }, 1000); //crée des elts chaque 1seconde

// document.body.addEventListener("click", () => {
//   clearInterval(interval);
// }); //arrête l'intervalle si clique sur body

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
// }); //supprime l'element cliqué du BOM

// Location ---------
// console.log(location.href); //localise href
// console.log(location.host); //localise host
// console.log(location.pathname); //localise lien dossier
// console.log(location.search); //localise

// location.replace("http://lequipe.fr");//remplace la page par lien dedans
// window.onload = () => {
//   location.href = "http://twitter.fr";
// }; //rediriger vers une autre page

// Navigator ----------
//console.log(navigator.userAgent);
//géolocalisation utilisateur
//https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// History
//console.log(history); //consult historique
// window.history.back(); //retour en arrière quand utilisateur valide klk chose par exemple
//history.go(-2)//retour 2page en arrière

//--------------------------------
// Setproperty

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
