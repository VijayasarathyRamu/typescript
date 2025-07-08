var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    //create constructor
    function Employee(id, name, salary, isSingle) {
        //data-member
        this.eId = 101;
        this.eName = "vijay";
        this.eSalary = 65000;
        this.eSingle = true;
        this.eId = id;
        this.eName = name;
        this.eSalary = salary;
        this.eSingle = isSingle;
    }
    // member-function
    Employee.prototype.employeeDetails = function () {
        return "Id:".concat(this.eId, " Name:").concat(this.eName, " Salary:").concat(this.eSalary, " Single:").concat(this.eSingle);
    };
    return Employee;
}());
//create a object for this class
// let empObj = new Employee(//value"");
// console.log(empObj.eName);
// console.log(empObj.employeeDetails());
// let empObj1 = new Employee(102, "raja", 55000, true);
// console.log(empObj1.eName);
// console.log(empObj1.employeeDetails());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, salary, single, compName, compaddr) {
        var _this = _super.call(this, id, name, salary, single) || this;
        _this.cName = compName;
        _this.cAddress = compaddr;
        return _this;
    }
    Company.prototype.employeeDetails = function () {
        return "Id:".concat(this.eId, " Name:").concat(this.eName, " Salary:").concat(this.eSalary, " Single:").concat(this.eSingle, " CompanyName:").concat(this.cName, " Address:").concat(this.cAddress);
    };
    ;
    return Company;
}(Employee));
var companyObj = new Company(201, "arjun", 56000, false, "Changepond", "Chennai");
console.log(companyObj.employeeDetails());
