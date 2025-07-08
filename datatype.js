console.log("hi everyone");
var myname = "vijay";
console.log(myname);
//number
var no1 = 1000;
console.log(no1);
//boolean
var cond1 = true, con2 = false;
console.log(cond1, cond1);
//array
var courses = ["react", "angular", "java", "python"];
var breakfast = ["idly", "vada"];
console.log(courses);
console.log(breakfast);
//tupple
var item = ["samsosa", 30];
console.log(item);
//enum
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thurs"] = 4] = "thurs";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 6] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
var data2 = days.mon;
console.log(data1);
console.log(data2);
//union
var information = "changepond";
console.log(information);
//any
var dataa = 1234;
var dataa1 = "str";
var dataa2 = true;
console.log(dataa);
console.log(dataa1);
console.log(dataa2);
