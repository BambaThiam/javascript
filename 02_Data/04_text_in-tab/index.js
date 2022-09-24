// // Test
// let tab = [12, "tata", 56, "papa", "fsfds"];
// let newArray = [];
// function filter_list(l) {
//   // Return a new array with the strings filtered out
//   for (let i = 0; i < l.length; i++) {
//     if (isNaN(l[i])) {
//       newArray += [l[i]];
//     }
//     console.log(newArray);
//   }
// }

// filter_list(tab);

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((v) => typeof v == "number");
}
