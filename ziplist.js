const testList1 = ['a', 'b', 'c'];
const testList2 = ['1', '2', '3'];

function zipList(first, second) {
  const resultList = [];
  for (let j = 0; j < first.length; j++) {
    resultList.push(first[j], second[j]);
  }
  return resultList;
}
console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(first, second) {
  return _.flatten(_.zip(first, second));
}
console.log(zipListTheSimpleWay(testList1, testList2));
