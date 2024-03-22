interface personInfo {
  fName: string;
  lName: string;
  age: number;
  address: { street: string; landMark: string; city: string; pinCode: number };
  contact?: (string | number)[];

  getFullName(): string;
  getAddress(): string;
}

class employeeInfo implements personInfo {
  fName: string;
  lName: string;
  age: number;
  address: { street: string; landMark: string; city: string; pinCode: number };
  contact?: (string | number)[];

  constructor(fName: string, lName: string, age: number) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  getFullName(): string {
    return `fullName: ${this.fName} ${this.lName}`;
  }
  getAddress(): string {
    return `Address: ${this.address.street},${this.address.landMark},${this.address.city},${this.address.pinCode}`;
  }
}

const employeeOne = new employeeInfo("Vivek", "Vaghasiya", 21);
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
