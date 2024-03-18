const person1 = {
  firstname: "John",
  lastname: "Doe",
  fullname: function (prefix, suffix) {
    let fullName = `${this.firstname} ${this.lastname}`;
    if (prefix) {
      fullName = `${prefix} ${fullName}`;
    }
    if (suffix) {
      fullName = `${fullName} ${suffix}`;
    }
    console.log(fullName);
  },
};

const person2 = {
  firstname: "Jane",
  lastname: "Smith",
};

// Using call
person1.fullname.call(person2, "Mr.", "III"); //control the context (this value) of a function call.

// Using apply
person1.fullname.apply(person2, ["Mrs.", "Jr."]); //takes arguments as an array instead of individually

// Using bind
const printPerson2Fullname = person1.fullname.bind(person2, "Ms.", "Sr."); // first it create a new function. bind return the a function
printPerson2Fullname();
