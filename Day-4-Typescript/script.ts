interface personInfo {
  fName: string;
  lName: string;
  age: number;
  address: addressInfo;
  contact: number[];

  getFullName(): string;
  getAddress(): string;
}

interface addressInfo {
  street: string;
  landMark: string;
  city: string;
  pinCode: number;
}

class employeeInfo implements personInfo {
  fName: string;
  lName: string;
  age: number;
  address: addressInfo;
  contact: number[];

  constructor(
    fName: string,
    lName: string,
    age: number,
    address: addressInfo,
    contact: number[]
  ) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.address = address;
    this.contact = contact;
  }

  getFullName(): string {
    return `fullName: ${this.fName} ${this.lName}`;
  }
  getAddress(): string {
    return `Address: ${this.address.street},${this.address.landMark},${this.address.city},${this.address.pinCode}`;
  }
}

const employeeOne = new employeeInfo(
  "Vivek",
  "Vaghasiya",
  21,
  {
    street: "Shiv Nagar Soc., Kargil Chowk",
    landMark: "Punagam",
    city: "Surat",
    pinCode: 395010,
  },
  [9586252572, 7896587485]
);

console.log(employeeOne.getFullName());
console.log(employeeOne.getAddress());
console.log(employeeOne.contact);

const employeeTwo = new employeeInfo(
  "Vivek2",
  "Vaghasiya",
  21,
  {
    street: "Shiv Nagar Soc., Kargil Chowk",
    landMark: "Punagam",
    city: "Surat",
    pinCode: 395010,
  },
  []
);
console.log(employeeTwo.getFullName());
console.log(employeeTwo.getAddress());
console.log(employeeTwo.contact);
