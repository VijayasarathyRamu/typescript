class Employee {
    //data-member
    eId:number = 101;
    eName:string = "vijay";
    eSalary:number = 65000;
    eSingle:boolean = true;

    //create constructor
    constructor(id: number,name: string,salary: number,isSingle: boolean){
        this.eId = id;
        this.eName = name;
        this.eSalary = salary;
        this.eSingle = isSingle;
    }

    // member-function
    employeeDetails(){
        return `Id:${this.eId} Name:${this.eName} Salary:${this.eSalary} Single:${this.eSingle}`
    }
}

//create a object for this class
// let empObj = new Employee(//value"");
// console.log(empObj.eName);
// console.log(empObj.employeeDetails());

// let empObj1 = new Employee(102, "raja", 55000, true);
// console.log(empObj1.eName);
// console.log(empObj1.employeeDetails());

class Company extends Employee{
    cName: string;
    cAddress: string;

    constructor(id:number,name:string,salary:number,single:boolean,compName:string,compaddr:string){
        super(id,name,salary,single);
        this.cName = compName;
        this.cAddress = compaddr;
    }
    employeeDetails(){
        return `Id:${this.eId} Name:${this.eName} Salary:${this.eSalary} Single:${this.eSingle} CompanyName:${this.cName} Address:${this.cAddress}`;
};
}
let companyObj = new Company(201,"arjun",56000,false,"Changepond","Chennai");
console.log(companyObj.employeeDetails());