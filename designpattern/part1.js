//this in global scope

this.car='window car';

console.log(this.car);

this.bmw= {

  car:'BMW'

};

console.log(this.bmw.car);



//THIS INSIDE private OBJECT

let landrover={

  car:'evoque'

};

console.log(landrover.car)



//this INSIDE method

let landrover={

  car:'evoque',

  buyCar() {

    console.log(`buying ${this.car}`)

  }

};

landrover.buyCar();

//

//this INSIDE FUNCTION

function buyCar(colour){

  console.log(`buying ${this.car} with colour ${colour}`);

}

buyCar.call(this,'red')

buyCar.call(landrover,'black')

buyCar.call(this.bmw,'white')



//this Inside inner function

function buyCar(colour){

  

let innnerfunctioln=(colour)=>{    

  console.log(`buying ${this.car} with colour ${colour}`);

}

innnerfunctioln(colour);

}

buyCar.call(this,'red')

buyCar.call(landrover,'black')

buyCar.call(this.bmw,'white')

//this inside constructor

//this inside class





//////////////////////////////////////////////////////////////////
class Student{
    static count=0;
   constructor(name,age,phone,marks){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.marks=marks;
        Student.count++   } 

    isEligible(){
    if(this.marks>40){
        console.log(`${this.name} is Eiligible`);
    }
    else console.log(`${this.name} is notEiligible`);
}
noOfStudents(){
    
    
    console.log('number of students ='+Student.count);
}

}


let stu1=new Student('stu1',10,'1223',42);
let stu2=new Student('stu2',15,'1214523',39);
let stu3=new Student('stu3',16,'1224543',45);
let stu4=new Student('stu4',12,'125453',30);
let stu5=new Student('stu5',11,'12123',41);
stu5.isEligible();

stu2.isEligible();

stu1.noOfStudents();
