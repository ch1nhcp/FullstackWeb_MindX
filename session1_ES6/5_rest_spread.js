// const arr = [1];
// arr.push(2);
// const arr2 = [...arr];
// arr.push(5);
// console.log(arr)
// console.log(arr.push(5));
// console.log(arr.concat(4));
// console.log([...arr,4]) //tuong duong voi concat  // la rest operator

const obj = {
  name: "sam",
  age: 18,
  address: {
    city: "hanoi",
    distric: "Cau Giay",
  },
};

console.log(obj);
console.log({ ...obj, age: 20, gender: "F" }); // goi la spread

const {
  name,
  age,
  address: { city, distric },
} = obj;
console.log(name);
console.log(city);

const coordinate = [100, 1];
const [x, y, z] = coordinate; // => x =100, y =1 

console.log(coordinate);

