<!-- @format -->

# SundryJS

A collection of useful functions, types, and objects.

## Installation

Install this module with the following command:

```sh
npm install sundryjs
```

Add the module to your package.json dependencies:

```sh
npm install --save sundryjs
```

Add the module to your package.json dev-dependencies:

```sh
npm install --save-dev sundryjs
```

Import a module as follows:

```TS
import nullThrows from "sundryjs/assert/nullThrows";
```

For types, import it like this:

```TS
import type { Opaque } from "sundryjs/types/Opaque";
```

## Reference

### `EventEmitter`

The `EventEmitter` module implements a generic typed event emitter.

```TS
class EventEmitter<T>
```

`T` defines an object keyed by the event name and the value being the event type.

The `listen` method starts listening to specific events, executing the callback when the event is triggered.

```TS
listen<E extends string & keyof T>(
    event: E,
    cb: (data: T[E]) => void,
): EventSubscription
```

Starts listening to all events, using the callback when the event is triggered.

Note:
This method does not listen to the payload, but only the event name. The payload is not sent into the callback as with `listen`. Use this only for information purposes. Also, use this sparingly as it can become quite expensive.

```TS
listenToAll<E extends string & keyof T>(
    cb: (event: E) => void,
): EventSubscription
```

Triggers an event with the typed payload.

```TS
trigger<E extends string & keyof T>(event: E, payload: T[E]): void
```

Convenience function to remove a subscription. You can also use the `EventSubscription` interface returned from the `listen` methods.

```TS
remove(subscription: EventSubscription): void
```

Removes all subscribers from the event emitter.

```TS
removeAll(): void
```

The `EventSubscription` interface is defined as:

```TS
interface EventSubscription {
    remove: () => void;
}
```

Usage:

```TS
type Events = {
    "auth:login:changed": {
        user: string,
        permissions: number,
    };
    // Any other event
};

class GlobalEventEmitter extends EventEmitter<Events> {}

const globalEvents = new GlobalEventEmitter();

// Listen to events fully typed
const subscription = globalEvents.listen("auth:login:changed", payload => {
    console.log(`User ${payload.user} logged in with permission value ${payload.permissions}`);
});

// Trigger events requiring to supply the right payload fields
globalEvents.trigger("auth:login:changed", {
    user: "Anthony",
    permissions: 0755,
});

// Remove subscription
subscription.remove();
```

The `remove` method removes the subscription from the event emitter.

## Assert

### `assert/assertNever`

A funtion that fails for all calls.

This is used for exhausive checking switches and similar use-cases.

```TS
assertNever(x: unknown): never
```

Usage:

The following code makes sure that value is either 1 or 2. Due to typing, TypeScript will be able to recognize this and statically suggests this error case.

```TS
switch (value) {
    case 1:
        // some code
        break;
    case 2:
        // some other code
        break;

    default:
        assertNever(value);
}
```

### `assert/doNotThrowWithDetails`

Handles the exception according to the environment.

Use this function in try/catch exceptions when you do not want to throw, but keep track of the issue in a development environment. The values will be written to the console when `__DEV` is set, otherwise it will be ignored.

If no `msg` was given, then it will try to derive it from the non-standard `internalMessage` field and will fall back to the standard `message` field. The `data` values will be printed with the `msg` in a collapsible console entry.

```TS
doNotThrowWithDetails(
    err: Error,
    msg?: string,
    data?: Record<string, unknown>,
): void
```

Usage:

```TS
try {
    // some code that might throw an exception
} catch(Error err) {
    doNotThrowWithDetails(
        err,
        null, // use message from error
        { // Values which will be printed in the console log supporting debugging
            foo: 23,
        },
    );
}
```

### `assert/invariant`

Use `invariant()` to assert a state which your program assumes to be true.

Use template string to give more context on what went wrong.

The invariant message will be stripped in production, but the invariant will remain to ensure logic does not differ in production.

```TS
invariant(condition: unknown, msg?: string): asserts condition
```

Usage:

```TS
const value = someFunction(); // Might be any type
invariant(typeof value === "string", "Value is not a string.");
// Can be sure it is a string now
```

### `assert/nullThrows`

Util function to return the non-null (and non-undefined) type to keep everything strictly typed.
Use template string to give more context on what went wrong.

```TS
nullThrows<T>(x: T | null | undefined, msg?: string): T
```

Usage:

```TS
const value = someFunction(); // Returns number | null | undefined
const numberValue = nullthrows(value, "Value is null.");
// numberValue is now of type "number"
```

### `assert/throwWithDetails`

Handles the exception according to the environment.

Use this function in try/catch exceptions when you still want to throw. This is very similar to `doNotThrowWithDetails`, but it will throw an exception. However, it will also in addition write the context data to the console in a development environment when `__DEV` is set.

No `msg` will automatically be derived in this case. The `data` values will be printed with the `msg`, if available, in a collapsible console entry.

The return value gives TypeScript context that it will never return.

```TS
throwWithDetails(
    err: Error,
    msg?: string,
    data?: Record<string, unknown>,
): never
```

Usage:

```TS
try {
    // some code that might throw an exception
} catch(Error err) {
    throwWithDetails(
        err, // Will re-throw this error
        null, // use message from error
        { // Values which will be printed in the console log supporting debugging
            foo: 23,
        },
    );
}
```

### `assert/undefinedThrows`

Util function to return the non-undefined (only) type to keep everything strictly typed.
Use template string to give more context on what went wrong.

```TS
undefinedThrows<T>(x: T | undefined, msg?: string): T
```

Usage:

```TS
const value = someFunction(); // Returns number | undefined
const numberValue = nullthrows(value, "Value is undefined.");
// numberValue is now of type "number"
```

## Collection

### `collection/firstX`

Returns the first entry and will fail if none available.

```TS
firstX<T>(items: T[], msg?: string): T
```

Usage:

```TS
const firstEntry = firstX(list); // Fails when list is empty
```

### `collection/flatten`

Flattens a list within a list to only return a single-depth list.

```TS
flatten<T>(items: T[][]): T[]
```

Usage:

```TS
const complexList = [
    [1, 2, 3],
    [4, 5, 6],
];
const thinList = flatten(complexList);
// thinList = [1, 2, 3, 4, 5, 6]
```

### `collection/lastX`

Returns the first entry and will fail if not available.

```TS
lastX<T>(items: T[], msg?: string): T
```

Usage:

```TS
const lastEntry = lastX(list); // Fails when list is empty
```

### `collection/nthX`

Returns the first entry and will fail if not available.

Note: The index starts at zero.

```TS
nthX<T>(items: T[], idx: number, msg?: string): T
```

If `msg` is not given, a useful message will be returned.

Should the xth entry be `undefined`, then it _will_ trigger an error.

Usage:

```TS
const fifthEntry = nthX(list, 4); // Fails when there is no 5th entry
```

### `collection/onlyX`

Returns the first entry and will fail if there are none or more than one entry available.

```TS
onlyX<T>(items: T[], msg?: string): T
```

Usage:

```TS
const list = someFunction(); // Will return a list, but it is expected to be one entry
const entry = onlyX(list); // Fails when there is no or more than one entry
```

## Str

### `str/camelCase`

Converts a string to camel-case.

Examples:
foo-bar -> fooBar
FooBar -> fooBar
fooBar -> fooBar
foo_bar -> fooBar

```TS
camelCase(str: string): string
```

### `str/kebabCase`

Converts a string to kebab-case.

Examples:
foo-bar -> foo-bar
FooBar -> foo-bar
fooBar -> foo-bar
foo_bar -> foo-bar

```TS
kebabCase(str: string): string
```

### `str/pascalCase`

Converts a string to pascal-case.

Examples:
foo-bar -> FooBar
FooBar -> FooBar
fooBar -> FooBar
foo_bar -> FooBar

```TS
pascalCase(str: string): string
```

### `str/snakeCase`

Converts a string to snake-case.

Examples:
foo-bar -> foo_bar
FooBar -> foo_bar
fooBar -> foo_bar
foo_bar -> foo_bar

```TS
snakeCase(str: string): string
```

## Time

### `time/time`

Utility functions for time.

Following is a list of self-explanatory functions:

```TS
secToMs(seconds: number): number
```

```TS
msToSecs(ms: number): number
```

```TS
minsToSecs(minutes: number): number
```

```TS
secsToMins(secs: number): number
```

```TS
hrsToSecs(hours: number): number
```

```TS
secsToHrs(secs: number): number
```

```TS
daysToSecs(days: number): number
```

```TS
secsToDays(secs: number): number
```

```TS
weeksToSecs(weeks: number): number
```

```TS
secsToWeeks(secs: number): number
```

```TS
monthsToSecs(months: number): number
```

```TS
secsToMonths(secs: number): number
```

```TS
quartersToSecs(quarters: number): number
```

```TS
secsToQuarters(secs: number): number
```

```TS
halvesToSecs(halves: number): number
```

```TS
secsToHalves(secs: number): number
```

```TS
yearsToSec(years: number): number
```

```TS
secsToYears(secs: number): number
```

## Types

### `types/isType`

Type guard for runtime. It converts an input type to an output type according to some condition defined.

```TS
isType<T>(value: unknown, condition: boolean): value is T
```

Usage:

```TS
const value = isType(inputValue, typeof inputValue = "string");
```

### `types/ObjectPattern`

Converts an object with string keys to a typed object.

Note: Make sure to mark the object as `<const>` as this is required.

```TS
type ObjectPattern<T>
```

Usage:

```TS
const payload = <const>{
    id: "number",
    username: "string",
};
type Payload = ObjectPattern<typeof payload>;
// Payload is of type
// {
//   id: number,
//   username: string,
// }
```

### `types/Opaque`

Defines an opaque type for TypeScript.

Note: Make sure you give the `K` a unique identifier across the system.

```TS
type Opaque<K, T>
```

Usage:

```TS
// A function which requires a specific type
function login(userID: UserID): void {
    // Do the login
}

// Define Opaque type
type UserID = Opaque<"UserID", number>;

// Define a function to convert from a number value to the Opaque type
function makeUserID(userID: number): UserID {
    return userID as UserID;
}

// Convert a validated input to the Opaque value
const user_id = makeUserID(validateUserID(input_user_id));

// Call function
login(user_id);

// Will FAIL
login(input_user_id);
```

### `types/StringToType`

Returns the type of a particular string literal

Converts a "string" literal into the string type, and many others.

```TS
type StringToType<T>
```

The following types are supported:

- "string" -> string
- "number" -> number
- "boolean" -> boolean
- "undefined" -> undefined
- "function" -> Function
- "object" -> Record<string, any>

### `types/TypeToString`

Returns the type of a particular string literal

Converts a "string" literal into the string type, and many others.

```TS
type TypeToString<T>
```

The following types are supported:

- string -> "string"
- number -> "number"
- boolean -> "boolean"
- undefined -> "undefined"
- Function -> "function"
- Record<string, any> -> { [K in keyof T]: TypeToString<T[K]> }
- T -> any
- null -> "null"

Note: This type uses a recursive call and an object will be broken down into individual strings.

## Verify

### `verify/hasOwnProperty`

Safer wrapper around hasOwnProperty.

See https://eslint.org/docs/rules/no-prototype-builtins

```TS
hasOwnProperty(
    obj: Record<string, unknown>,
    property: string,
): boolean
```

### `verify/hasSameProperties`

Determines if two object have the same properties.

```TS
hasSameProperties(
    a: Record<string | number | symbol, any>,
    b: Record<string | number | symbol, any>,
): boolean
```

### `verify/objectPatternVerify`

Verifies that a specific object has the structure as defined in an object pattern. It will throw when the type is not as expected.

```TS
objectPatternVerify<T>(
    desc: string,
    pattern: Record<string, ObjectPatternTypes>,
    values: T,
    options?: { fail?: boolean },
): T | null
```

Usage:

```TS
const pattern = {
    name: "string",
    age: "number",
};
const values = {
    name: "John Doe",
    age: 23,
};
const result = objectPatternVerify("<What is this?>", pattern, values);
// Will be null if it isn't of this type as defined above,
// but will return the value if it is
```
