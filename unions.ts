type MyBool = true | false; //new bool type that is either true or false


type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
    return obj.length;
}

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
        //          ^ = (parameter) obj: string
    } else {
        return obj;
    }
}

function padLeft(value: string, padding: string | number) {
    // ...
}

//let indentedString = padLeft("Hello world", true);//error

//----------------------------------------------------
/**
 * If we have a value that is a union type, 
 * we can only access members that are common to all types in the union.
 */
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// Only available in one of the two possible types
//pet.swim(); error


//-----------------------------
type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

type NetworkFromCachedState = {
    state: "from_cache";
    id: string;
    response: NetworkSuccessState["response"];
};

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

function logger(s: NetworkState): string {
    switch (s.state) {
        case "loading":
            return "loading request";
        case "failed":
            return `failed with code ${s.code}`;
        case "success":
            return "got response";
        default: //this case will have an error if there is a case not covered
            return assertNever(s);
    }
}


//------------------------intersection---------------------------
//merge between types
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

interface ArtistsData {
    artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }

    console.log(response.artists);
};  