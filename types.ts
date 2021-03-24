
//basic
let isDone: boolean = false;

let decimal: number = 6;

let car: string = "bmw";

//--------------------Array--------------------------------------
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//--------------------Tuple-----------------------------------------
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
console.log(x[0].substring(1));

//----------------------------Enum--------------------------------
enum Color {
    Red = 1,
    Green,
    Blue,
}
let c: Color = Color.Green;

let colorName: string = Color[2];
console.log(colorName);//Green

let intColor: number = Color.Red;


//--------------------------Unknown-----------------------------------
//similar to dynamic in c#

let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
//const aNumber: number = maybe; //error


if (maybe === true) {
    // TypeScript knows that maybe is a boolean now
    const aBoolean: boolean = maybe;
    // So, it cannot be a string
    //const aString: string = maybe; //error

}

if (typeof maybe === "string") {
    // TypeScript knows that maybe is a string
    const aString: string = maybe;
    // So, it cannot be a boolean
    //const aBoolean: boolean = maybe; //error

}

//-------------------------------any-------------------------------
//**similar to unkown but no type checking

declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

//**Unlike unknown, variables of type any allow you to 
//access arbitrary properties, even ones that don’t exist. 

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
//strictlyTyped.toFixed(); //error

looselyTyped = {};
let d = looselyTyped.a.b.c.d;

/**
 * After all, remember that all the convenience of any comes
 * at the cost of losing type safety.
 *  Type safety is one of the main motivations for
 * using TypeScript and you should try to avoid using any when not necessary.
 */


//----------------------------Void,Null,Undefined-----------------------
let unusable: void = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

/**
 * By default null and undefined are subtypes of all other types.
 *  That means you can assign null and undefined to something like number.
 *
 * However, when using the --strictNullChecks flag, null and undefined
 * are only assignable to unknown, any and their respective types
 * (the one exception being that undefined is also assignable to void).
 */

//----------------------------Never-----------------------
/**
 * The never type represents the type of values that never occur.
 * For instance, never is the return type for a function expression
 * or an arrow function expression that always throws an exception
 * or one that never returns.
 */

function error(message: string): never {
    throw new Error(message);
}

//----------------------------Object-----------------------
/***
 * The never type is a subtype of, and assignable to,
 *  every type; however, no type is a subtype of, or assignable to,
 *  never (except never itself).
 *  Even any isn’t assignable to never.
 */


/**
 * object is a type that represents the non-primitive type,
 *  i.e. anything that is not number, string, boolean,
 * bigint, symbol, null, or undefined.
 */

const obj: object = {};
//const obj: object = "hamada"; //error

//----------------------------Assertions------------------------------
//casting
let someValue: unknown = "this is a string";


let strLength: number = (someValue as string).length;

strLength = (<string>someValue).length;

//strLength = someValue.length;//error

//NOTE:
/**
 * It can be tempting to think that the types
 *  Number, String, Boolean, Symbol, or Object
 * are the same as the lowercase versions recommended above.
 * These types do not refer to the language primitives however,
 *  and almost never should be used as a type.
 */

//------------------ReadonlyArray------------------------------
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
/**
 * ro[0] = 12; // error!
 * ro.push(5); // error!
 * ro.length = 100; // error!
 * a = ro; // error!
 */

a = ro as number[];

