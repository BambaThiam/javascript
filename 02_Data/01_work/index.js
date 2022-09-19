// ---------------- Type des données -----------------

let string = "chaine";
let num = 25;
let bool = true;
let mazVariable; //type undefined

// console.log(typeof bool); //détermine type variable

// ---------------------Tableaux -------------------

let tab = ["Dakar", "Thies", "Mbour", "Touba"];

for (let index = 0; index < tab.length; index++) {
  const element = tab[index];
  // console.log(element);
}

let tab2 = ["Djifir", 45, [1, 2], { nom: "Bamba" }];
// console.log(typeof tab2);
// console.log(tab2[2][0]);
// console.log(tab2[3].nom);

let obj = {
  pseudo: "Bamba",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// obj.adresse = "22 rue du code";
// // console.log(obj.technos[0]);
// console.log(obj);

let data = [
  {
    pseudo: "Bamba",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Fatou",
    age: 42,
    technos: ["Python", "Django", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nogaye",
    age: 26,
    technos: ["Angular", "CSS", "php"],
    admin: true,
  },
];
// console.log(data[2].pseudo);

// -------------- Structures de contrôle -------------

// if (data[0].age > data[1].age) {
//   console.log(
//     `L'age de ${data[0].pseudo} est plus grand que celui de ${data[1].pseudo}`
//   );
// } else {
//   console.log(
//     `L_age de ${data[0].pseudo} est plus petit que celui de ${data[1].pseudo}`
//   );
// }

// While
let w = 0;

while (w < 5) {
  w++;
  // console.log(`La valeur de w est de ${w}`);
}

// Do While
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 6);

// boucles for

for (const user of data) {
  document.body.innerHTML += `<li>${user.pseudo} a ${user.age} ans</li>`;
}

for (let index = 0; index < data.length; index++) {
  const element = data[index];
  // console.log(element.technos);
  // document.body.innerHTML += `<h2>${element.technos.join(" - ")}</h2>`;
}

// Switch
document.body.addEventListener("click", (e) => {
  // console.log(e.target.id);
  select = e.target.id;
  switch (select) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;

    default:
      document.body.style.background = "none";
      break;
  }
});

// ------------------- Méthodes String -------------------

let string2 = "Javascript est un langage orienté objet";
console.log(typeof string2); // type variable

console.log(eval("1" + 2)); // évalue une expression => 12
console.log(eval(parseInt("1") + 2)); // évalue une expression, parseint convertie en int => 3

console.log(isNaN(string2)); // si c'est un nombre => true or false

console.log(string2.length); // nbre ee caractère , les espaces comptent aussi
console.log(string2[string2.length - 1]); // nbre ee caractère , last index = length -1 => t

console.log(string2.indexOf("langage")); //index de la première lettre du mot => 18, return _1 s'il ne connait pas

let newString = string2.slice(2); //commence à couper à partir du 2ème lettre
let newString1 = string2.slice(5, 17); // récupère lettres entre 2 et 7
console.log(newString); // commence à couper à partir du 2ème lettre
console.log(newString1); // commence à couper à partir du 2ème lettre

console.log(string2.split("i")); // Découpe partout où il voit du i et le met dans un tableau

console.log(string2.toLocaleLowerCase()); // Mettre tout en minuscule
console.log(string2.toLocaleUpperCase()); // Mettre tout en minuscule

console.log(string2.replace("Javascript", "PHP")); // Remplace javascript par php

// ------------------- Méthodes Numbers -------------------
let number2 = 43.2362;
let numberString = "42.12 est un chiffre";

console.log(number2.toFixed(2)); // garde 2 chiffres après la virgule
console.log(parseFloat("36.45")); // transforme chaine en float
console.log(parseInt(numberString)); // transforme première chiffre trouvé dans une chaine

//Math
console.log(Math.PI);
console.log(Math.round(4.5)); // arrondi tout simplement => 5
console.log(Math.floor(4.9)); // arrondi inf => 4
console.log(Math.ceil(4.1)); // arrondi sup => 5
console.log(Math.pow(2.7)); // 2 à la puisance 7, peut utiliser également ** => 128
console.log(Math.sqrt(16)); // racine carrée => 4

console.log(Math.random()); // return un chiffre entre 0 et 1
console.log(Math.random() * 50); // return un chiffre entre 0 et 50
console.log(Math.floor(Math.random() * 50)); // return un chiffre entier entre 0 et 50

// ------------------- Méthodes Arrays -------------------

let array1 = ["Javascript", "Php", "Python"];
let array2 = ["Ruby", "Solidity"];

//Concact
let newArray = array1 + array2; // renvoie chaine de caractère avec valeur collée
console.log(newArray);

let newArray1 = array1.concat(array2); // renvoie tableau concactené 1 à 2
console.log(newArray1);
let newArray2 = [...array1, ...array2]; // fusionne les 2 tableaux grace aux 3points (spread opérateur => renvoie 1 tableau concactené
console.log(newArray2);

// join
console.log(newArray2.join(" - ")); //ajoute séparateur entre élts tableau

// slice
console.log(newArray2.slice(2)); //découpe moi 2 premiers elts tableaux
console.log(newArray2.slice(2, 5)); //garde 3, 4 et 5ème elts tableaux

// indexof
console.log(newArray2.indexOf("Python")); //Donne l'index du mot python

// foreach
newArray2.forEach((languages) => console.log(languages));

//Every
console.log(newArray2.every((language) => language === "Php")); //recherche caractère identique language ds langage) => true or false

//some
console.log(newArray2.some((language) => language === "Php")); //recherche si caractère existe klk part => true or false

//Shift
let shift = array1.shift(); // supprime 1er elt tableau
console.log(shift);

//pop
let pop = array1.pop(); // supprime dernier elt tableau
console.log(pop);

const restArray = newArray2.splice(1, 1, "C++"); // enleve à l'emplacement 1, 1 elt et le remplacer par C++
console.log(restArray);

// IMPORTANT ---------
let arrayNumber = [4, 65, 98, 23, 13];

console.log(arrayNumber.reduce((x, y) => x + y)); //je veux que tu m'additionne elts tableaux
console.log(arrayNumber.reduce((x, y) => x * y)); //je veux que tu multiplie elts tableaux

arrayNumber.push("Coucou"); //rajoute ds tab
console.log(arrayNumber);

//FILTER, SORT (trier), MAP (lister)

console.log(arrayNumber.filter((number) => number > 15)); //garde nbre superieur à 15

console.log(arrayNumber.sort()); //trie elts suivant index
console.log(arrayNumber.sort((a, b) => b - a)); //trie plus grand au plus petit
console.log(arrayNumber.sort((a, b) => a - b)); //trie plus petit au plus grand

console.log(arrayNumber.filter((number) => number > 15).sort((a, b) => a - b)); // combiner  méthodes

arrayNumber.map((number) => console.log(number)); // énumère

document.body.innerHTML += arrayNumber
  .map((number) => `<li>${number}</li>`)
  .join(""); // énumère

// ------------------- Méthodes Objets -------------------
document.body.innerHTML = data
  .filter((user) => user.admin === false)
  .filter((user) => user.pseudo.includes("a"))
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `
  <div class="user-card">
    <h2>${user.pseudo}</h2>
    <p>Age : ${user.age} ans </p>
    <p>Status : ${user.admin ? "Modérateur" : "Membre"} </p>
    
  </div>
`
  )
  .join("");
