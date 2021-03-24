function getRandomInt(num) {
  let result = Math.floor(Math.random() * num);
  //console.log(result);
  return result;
}

function getRandomItem(arr) {
  let itemNum = getRandomInt(arr.length);
  //console.log(arr[itemNum]);
  return arr[itemNum];
}
