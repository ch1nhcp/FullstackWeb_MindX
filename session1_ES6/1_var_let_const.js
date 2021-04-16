var name = "a";
name = 'as';
console.log(name);

let foo = 'b';
foo = 'bb';
console.log(foo);

const test = 'test';
// console.log(test)

function testFunction(){
    if(true){
        var x = 1000; 
        let y =2 ;
    }
    console.log(x);
    console.log(y);
}
testFunction();