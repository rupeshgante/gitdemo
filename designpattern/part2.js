let square=a=> a*a;
console.log(square(4));

let mult=(a,b)=>{return a*b;}
console.log(mult(2,3));

class Student{
    static count=0;
   constructor(name,age,phone,marks){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.marks=marks;
        Student.count++   } 

    isEligible(){
        return (age)=>{
    if(this.marks>40 && age>12){
        console.log(`${this.name} is Eiligible`);
    }
    else console.log(`${this.name} is notEiligible`);
}}
noOfStudents(){
    
    
    console.log('number of students ='+Student.count);
}

}


let stu1=new Student('stu1',10,'1223',42);
let stu2=new Student('stu2',15,'1214523',39);
let stu3=new Student('stu3',16,'1224543',45);
let stu4=new Student('stu4',12,'125453',30);
let stu5=new Student('stu5',11,'12123',41);
stu5.isEligible()(11);

stu2.isEligible()(15);

stu1.noOfStudents();
