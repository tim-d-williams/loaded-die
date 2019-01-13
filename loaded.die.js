function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  //set var to keep track of index
  //access the array at index from var
  //return value increment index
  var index = 0;

  return function() {
    /* your code here */
    var result = list[index]
    index += 1;

    return result;
    return index;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
