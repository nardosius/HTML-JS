// Task 1: Code a Person class
class Person {
    constructor(name, age, energy) {
        this.name = name;
        this.age = age;
        this.energy = energy;

    }

    sleep() {
        this.energy += 10;
        console.log("Person has slept, energy increased to: ",this.energy);
    }

    doSomethingFun() {
        this.energy -= 10;
        console.log("Person was active, energy decreased to: ",this.energy);

    }

}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
        console.log("Worker experience increased to: ", this.xp);
    }
   
}
// Task 3: Code an intern object, run methods
function intern() {
  var internObject = new Worker(0, 10, 'Bob', 21, 110);
        internObject.goToWork();
        // console.log(internObject);
        return internObject;
}
// Task 4: Code a manager object, methods
function manager() {
    var managerObject = new Worker(100, 30, 'Alice', 30, 120);
        managerObject.doSomethingFun();
        // console.log(managerObject);
        return managerObject;
    
}
intern();
manager();