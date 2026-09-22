class Employee{
    constructor(empid,empname,salary){
        this.empid=empid;
        this.empname=empname;
        this.salary=salary;
    }
    calculatesalary(){
        console.log(this.salary);
    }
}
class manager extends Employee{
    constructor(empid,empname,slary,incentive){
        super(empid,empname,salary);
        this.incentive=incentive;
    }
    calaculatesalary(){
        console.log(this.salary+this.incentive);
    }
}
let e1=new Employee(101,"anshika",50000);
let manager=new Employee(102,"vikas",400000,6000);
e1.calaculatesalary();
manager.calculatesalary();