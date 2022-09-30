let setColor = () => {
  let bodyColor = document.querySelector("body");
  let redColor = Math.floor(Math.random() * 255);
  let greenColor = Math.floor(Math.random() * 255);
  let blueColor = Math.floor(Math.random() * 255);
  bodyColor.style.backgroundColor =
    "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
  // bodyColor.textContent =
  //   "Rgb(" + redColor + ", " + greenColor + ", " + blueColor + ")";
  document.body.innerHTML = `<h2>Rgb(${redColor}, ${greenColor}, ${blueColor})</h2>`;
};
const myInterval = setInterval(setColor, 1000);

// Autres méthodes

// function getColor() {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   const color = `rgb(${r},${g},${b})`;

//   document.body.style.background = color;
//   document.body.innerHTML = `<h2>${color}</h2>`;
// }

// setInterval(getColor, 1000);
