/* CONSTRUCTORS
Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized. To use a constructor function, I must prepend it with the operator new. e.g., new Date(). Not all built-in obj have constructor, e.g. Math(). Only have constructors when data is for specific instance. Math() is fairly rigid. Date() changes everyday and will never be the same as the day before. 
The most common use case of "new" is to use it with one of the built-in object types. --> "let apple = new String("apple");"
Due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, even when their values are identical. Better off not using constructors when constructing plain, regular objects.
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
} "this" represents future object instance of the Train class.

INHERITANCE
From prototype -->prototype is an object that can hold properties to be shared by multiple other objects. Can use Object.create(); method to pass properties.Can use objects, but better to use CLASS.
*/
var bird = {//object declared
    hasWings: true,
    canFly: true,
    hasFeathers: true
}
var eagle1 = Object.create(bird);//eagle1 is now an object taking on properties from the bird object
console.log("eagle1: ",eagle1);//eagle1: {} -->will be empty

console.log(eagle1.hasWings);
console.log(eagle1.canFly);
console.log(eagle1.hasFeathers);//return boolean value
console.log(eagle1);//object sill empty even though accessed bird properties

var eagle2 = Object.create(bird);
console.log(eagle2.hasFeathers);
console.log(eagle2.hasFeathers);
console.log(eagle2.hasFeathers);

/* Can add methods to classes */
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train = new Train('red', false);
train.toggleLights();
train.lightsStatus();
train.getSelf();
train.getPrototype();//print out Train object

/* POLYMORPHISM */
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn != this.highSpeedOn;
        console.log('High speed status: ', this.highSpeedOn);
    }
    toggleLights() {//notice no "@Override"
            super.toggleLights();
            super.lightsStatus();
            console.log('Lights are 100% operational.');
    }
}
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}

