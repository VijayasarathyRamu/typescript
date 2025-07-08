console.log("hi everyone");

let myname:string = "vijay";

console.log(myname)

//number
let no1:number=1000;
console.log(no1);
//boolean
let cond1:boolean = true,con2:boolean = false;
console.log(cond1,cond1);
//array
let courses:string[] = ["react","angular","java","python"];
let breakfast:Array<string> = ["idly","vada"];
console.log(courses);
console.log(breakfast);

//tupple
let item:[string,number] = ["samsosa",30];
console.log(item);

//enum
enum days{sun,mon,tue,wed,thurs,fri,sat};
let data1 = days.sun;
let data2 = days.mon;
console.log(data1);
console.log(data2);
//union
let information:string | number = "changepond";
console.log(information);
//any
let dataa:any = 1234;
let dataa1:any = "str";
let dataa2:any = true;
console.log(dataa);
console.log(dataa1);
console.log(dataa2);

