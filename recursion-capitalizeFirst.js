function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase().concat(array[0].slice(1))];
  }
  let res = capitalizeFirst(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0][0].toUpperCase().concat(array.slice(array.length - 1)[0].slice(1)));
  return res;
}
