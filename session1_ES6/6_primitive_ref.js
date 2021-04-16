// // ======================
// let testObj = [1, 2, 3];
// let testObj2 = [1, 2, 3];
// console.log(testObj);
// let ObjDup = testObj;
// console.log(ObjDup);
// console.log(testObj === ObjDup);
// console.log(testObj === testObj2);
// ObjDup = [1, 2, 3, 5, 7];
// console.log(testObj);
// console.log(ObjDup);

const arr = [1, 2];
const arr2 = arr;
arr.push("cc");
console.log(arr2);

function test(arr) {
  const arr2 = [...arr, 1];
}
