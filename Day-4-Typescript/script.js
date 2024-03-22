var employeeInfo = /** @class */ (function () {
    function employeeInfo(fName, lName, age, address, contact) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.address = address;
        this.contact = contact;
    }
    employeeInfo.prototype.getFullName = function () {
        return "fullName: ".concat(this.fName, " ").concat(this.lName);
    };
    employeeInfo.prototype.getAddress = function () {
        return "Address: ".concat(this.address.street, ",").concat(this.address.landMark, ",").concat(this.address.city, ",").concat(this.address.pinCode);
    };
    return employeeInfo;
}());
var employeeOne = new employeeInfo("Vivek", "Vaghasiya", 21, {
    street: "Shiv Nagar Soc., Kargil Chowk",
    landMark: "Punagam",
    city: "Surat",
    pinCode: 395010,
}, [9586252572, 7896587485]);
console.log(employeeOne.getFullName());
console.log(employeeOne.getAddress());
console.log(employeeOne.contact);
var employeeTwo = new employeeInfo("Vivek2", "Vaghasiya", 21, {
    street: "Shiv Nagar Soc., Kargil Chowk",
    landMark: "Punagam",
    city: "Surat",
    pinCode: 395010,
}, []);
console.log(employeeTwo.getFullName());
console.log(employeeTwo.getAddress());
console.log(employeeTwo.contact);
