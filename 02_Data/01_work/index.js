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
