interface IPerson{
    personDetails():any;
}

class Organization implements IPerson{
    pName:string;
    pContact:number;
    pAddress:string;

    constructor(name:string,contact:number,address:string){
        this.pName = name;
        this.pContact = contact;
        this.pAddress = address;
    }
    personDetails() {
        return `Name:${this.pName} Contact:${this.pContact} Addres:${this.pAddress}`;
    }
}
let organizationObj = new Organization("vijay",1234,"chennai");
console.log(organizationObj.personDetails());