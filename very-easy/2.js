// function chunks(num) {
//   if (num === 1) {
//     return "chunk-";
//   } else {
//     return "chunk-" + chunks(num - 1);
//   }
// }

// Com operador ternario
function chunks(num) {
  return num === 1 ? "chunk-" : "chunk-" + chunks(num - 1);
}

console.log(chunks(5));
