var employeeInfo = /** @class */ (function () {
    function employeeInfo(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    employeeInfo.prototype.getFullName = function () {
        return "fullName: ".concat(this.fName, " ").concat(this.lName);
    };
    employeeInfo.prototype.getAddress = function () {
        return "Address: ".concat(this.address.street, ",").concat(this.address.landMark, ",").concat(this.address.city, ",").concat(this.address.pinCode);
    };
    return employeeInfo;
}());
var employeeOne = new employeeInfo("Vivek", "Vaghasiya", 21);
employeeOne.address = {
    street: "Shiv Nagar Soc.,Kargil Chowk",
    landMark: "Punagam",
    city: "Surat",
    pinCode: 395010,
};
employeeOne.contact = ["vivekvaghasiya201102@gmail.com", 9586252572];
console.log(employeeOne.getFullName());
console.log(employeeOne.getAddress());
console.log(employeeOne.contact);
