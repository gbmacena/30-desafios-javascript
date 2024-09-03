function juntaArray(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray = newArray.concat(arr[i]);
  }

  newArray.sort((a, b) => a - b);

  return newArray;
}

console.log(
  juntaArray([
    [2, 5, 2, 6, 600, 256, 235],
    [2, 5, 6, 7, 10, 500],
  ])
);
