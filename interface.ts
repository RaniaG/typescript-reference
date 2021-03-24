//interface is not just for class
//it can also describe objects, arrays,function

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
    //username: "whatever"// will show error
};


class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

}

const murphy: User = new UserAccount("Murphy", 1);


function getAdminUser(): User {
    return new UserAccount("Rania", 2);
}


function deleteUser(user: User) {
    // ...
}
//-----------------------------------------------------------------------
//optional properties:
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    return newSquare;
}

let mySquare = createSquare({ color: "black" });
//-----------------------------------------------------------------------
//readonly:
interface PointReadonly {
    readonly x: number;
    readonly y: number;
}

let p1: PointReadonly = { x: 10, y: 20 };
//p1.x = 5; // error!


//-----------------------------------------------------------------------
//function types:
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

//-----------------------------------------------------------------------
//indexable types:
/**
 * There are two types of supported index signatures: string and number.
 */
interface StringArr {
    [index: number]: string;
}

let myArray: StringArr;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

//readonly
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
//myArray2[2] = "Mallory"; // error!


//-----------------------------------------------------------------------
//methods types:
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}


//------------------------------------------------------------------------
//extending interfaces
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

//extending classes
/**
    When an interface type extends a class type it inherits the members of
 the class but not their implementations.
 */

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

/**
class ImageControl implements SelectableControl {

    private state: any; //error
     // Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
    //Types have separate declarations of a private property 'state'.
    select() { }
}
*/
//------------------------------------------------------------------------
//Hybrid
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) { } as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c1 = getCounter();
c1(10);
c1.reset();
c1.interval = 5.0;