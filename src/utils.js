function trasformToArray(data) {
  const array = [];
  for (let char of data) {
    if (char !== "\n") {
      array.push(parseInt(char));
    }
  }
  return array;
}

module.exports = { trasformToArray };
