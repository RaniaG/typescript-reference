enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

/**
 * the following isnt allowed bec it must be a constant
enum E {
    A = getSomeValue(),
    B,
}
 */

//---------------string enums--------------------------
/**
 * each member has to be constant-initialized with a string literal,
 * or with another string enum member.
 */
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

//---------------------hetro enums---------------------------
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

//-------------------------expression----------------------------
/**
 *
 * The enum member is initialized with a constant enum expression.
 *  A constant enum expression is a subset of TypeScript expressions
 * that can be fully evaluated at compile time.
 * An expression is a constant enum expression if it is:
 *
 *
    1- a literal enum expression (basically a string literal or a numeric literal)
    2- a reference to previously defined constant enum member
    (which can originate from a different enum)
    3- a parenthesized constant enum expression
    4- one of the +, -, ~ unary operators applied to constant enum expression
    5- +, -, *, /, %, <<, >>, >>>, &, |, ^
    binary operators with constant enum expressions as operands

 */

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
}

//-------------------enum members---------------------------
/**
 * enum members also become types as well
 */
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle; //a member can be used as a type
    radius: number;
}


//----------------------enums as objects--------------------------
/**
 * Enums are real objects that exist at runtime. For example, the following enum
 * 
 */

enum E {
    X,
    Y,
    Z,
}

function f(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);


//-------------------const enums-----------------------
