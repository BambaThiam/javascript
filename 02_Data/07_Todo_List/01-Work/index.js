// Crééer un form pour taper les todos

// Ajouter sur le dom ce qui est tapé dans le form à la validation du form
// let input = document.querySelector("input");
// console.log(input.value);
document.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<ul>${item.value}</ul>`;
});

// Supprimer un todo lorsque l'on click dessus (.remove())

//Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter les todos
