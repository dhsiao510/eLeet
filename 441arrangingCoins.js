var arrangeCoins = function(n) {
  if(n === 0) {
    return 0;
  }
  let i = 0;
  while(n >= i) {
    i++;
    n -= i;

    if (n === i) {
      return i;
    }

  }
  return i;
};

//Runtime: 116 ms
//Memory Usage: 38.3 MB