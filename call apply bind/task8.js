var Student={
    age:20
}
var Student2={age:21}
var read=function(){
    return this.age;
}
//CALL
console.log(read.call(Student));
//APPLY
console.log(read.apply(Student2))
//BIND
var bound= read.bind(Student);
console.log(bound());


//FUNCTION CURRYING

let multiply=function(x,y){
    console.log( x*y);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);
let multiplyByThree=multiply.bind(this,3);
multiplyByThree(6);

let mul=function(x){
    return function(y){
    console.log(x*y);
}
}
let multiplyByFour=mul(4);
multiplyByFour(7);