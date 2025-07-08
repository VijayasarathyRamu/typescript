"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mydata_1 = require("./mydata");
// import add from "./addition";
console.log(mydata_1.myFullName);
var productObj = new mydata_1.Product(101, "laptop", 55000);
console.log(productObj.productDetails());
// console.log(add(1000,300));
