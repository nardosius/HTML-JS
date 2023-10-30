// Groups data and functionality as properties and methods inside objects.
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
// methods update properties stored in the object instead of generating new return values
console.log(virtualPet.sleepy);//true
virtualPet.nap();
console.log(virtualPet.sleepy);//false
// model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - meaning, the properties and methods "belong together".
/* can access data in an object and run function on it (method)
        var purchase1 = {(notice that funx can call object from inside)
            shoes: 50,
            stateTax: 1.2,
            totalPrice: function() {(-->funx can be placed inside object declaration)
                var calculation = purchase1.shoes * purchase1.statetax;
                console.log("Total price: ", calculation);
            }

        }
        purchase1.totalPrice();//the property becomes a funx 
        alternately can use: var calculation = this.shoes * this.statetax
        "this" is alias for the current object
        
        CLASSES ---> extend properties/characteristics to multiple objects
        
        class car {
            constructor(color, speed) {
                this.color = color;
                this.speed = speed;
            }
            (function keyword not needed for methods)
            turboOn() {
                console.log("Turbo activated!");
            }
        }
        -------------------------------------------------------------------
        class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings() -->(accessing the parent class useWings() method)
        console.log("Barely flapping!") -->(adding functionality but no override)
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!") -->(has overidden parent method, no "@Override")
    }
}
var baldEagle = new Eagle(); -->(instantiation)
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"*/
