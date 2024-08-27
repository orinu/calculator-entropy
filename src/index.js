const { trasformToArray } = require("./utils");
const { columnXData, columnYData } = require("./data");

columnX = trasformToArray(columnXData);
columnY = trasformToArray(columnYData);

if (columnX.length !== columnY.length) {
  throw "length not the same";
}

const distinctX = new Set(columnX);
// for every uniqe in x
let totalSum = 0;
let totalData = "";
distinctX.forEach((item) => {
  const clac = {};
  counter = 0;
  //   move on x and get how many y
  for (let i = 0; i < columnX.length; i++) {
    // if uniqe item equale to columnX
    if (columnX[i] === item) {
      counter++;
      if (clac[columnY[i]]) {
        clac[columnY[i]]++;
      } else {
        clac[columnY[i]] = 1;
      }
    }
  }
  let data = `${counter}/${columnX.length}(`;
  let calculator = 0;
  for ([key, value] of Object.entries(clac)) {
    calculator += (-value / counter) * Math.log2(value / counter);
    data += `-${value}/${counter}log(${value}/${counter})`;
  }
  calculator = (counter / columnX.length) * calculator;
  totalSum += calculator;
  data += ")";
  totalData += "+" + data;
});
// console.log("totalData", totalData.slice(1));
// console.log("totalSum", totalSum.toFixed(4));
console.log(`${totalData.slice(1)} = ${totalSum.toFixed(4)}`);
