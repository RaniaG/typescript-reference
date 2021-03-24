class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
    move(distanceInMeters = 5) { //overrides base class
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}


//access modifiers:
/**
 * all public by default
 *
 * TypeScript is a structural type system.
 * When we compare two different types,
 *  regardless of where they came from,
 * if the types of all members are compatible,
 * then we say the types themselves are compatible.

However, when comparing types that have private
and protected members, we treat these types differently.
For two types to be considered compatible,
if one of them has a private member,
then the other must have a private member that
originated in the same declaration. The same applies to protected members.


 */

class Animal2 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends Animal2 {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new Animal2("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
//animal = employee; //error

/**
 * You can make properties readonly by using the
 * readonly keyword. Readonly properties must be initialized at their declaration or in the constructor.
 */


//-----------------

//pass parameters in constructor if we add modifier before it
//it is considered a property
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) { }
}


//-------------------------
/*
setters and getters:
*/
const fullNameMaxLength = 10;

class Employee2 {
    private _fullName: string = "";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}

//-------------------------
/*
abstract class:
unlike interface it can have implementation of 
methods
*/

abstract class Animal3 {
    abstract makeSound(): void;

    move(): void {
        console.log("roaming the earth...");
    }
}


//---------------------------------------------
/**
 * class as interface
 */
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };