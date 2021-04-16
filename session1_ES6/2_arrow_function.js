function hello() {
  console.log("hello, CP!");
}

hello();

function hello() {
  console.log("bye!");
}

// khai báo kiểu cũ ghi đè được

hello();

const hello2 = function () {
  console.log("hell!");
};
hello2();

const helloArr = () => {
  console.log("This is arrow function!");
};

helloArr();

document.getElementById("myBtn").addEventListener("click", () => {
  console.log(this);
});

const sum = (a, b) => {
  return a + b;
};

//Shorthand arrow function
const sumShort = (a, b) => a + b;

console.log(sum(3,5));
console.log(sumShort(4,5));

