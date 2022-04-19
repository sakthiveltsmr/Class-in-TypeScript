//class declaretion

class Employee {
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("sakthi");
console.log(emp1.employeeName);
emp1.greet();

//inheritance

class Manager extends Employee {
  constructor(ManagerName: string) {
    super(ManagerName);
  }
  work() {
    console.log(`manager deligate task`);
  }
}

let manager = new Manager("thiurmalai");

manager.work();

console.log(manager.employeeName);
