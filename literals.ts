/**
 * the process of going from an infinite number of potential cases (there are an infinite number of possible string values) to a smaller,
 *  finite number of potential case is called narrowing.
 */

//literal types:
//a finite number of values similar to enum
type Easing = "ease-in" | "ease-out" | "ease-in-out";
let animate = (dx: number, dy: number, easing: Easing) => {
    if (easing === "ease-in") {
        // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
        // It's possible that someone could reach this
        // by ignoring your types though.
    }
}
animate(0, 0, "ease-in");
//animate(0, 0, "uneasy"); //error

//--------------------------
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();

//--------------------------
interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}