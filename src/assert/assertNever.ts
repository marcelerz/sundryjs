/**
 * A function that fails for all calls.
 *
 * This is used for exhausive checking switches and similar use-cases.
 *
 * Usage:
 *
 * The following code makes sure that value is either 1 or 2. Due to typing,
 * TypeScript will be able to recognize this and statically suggests this error
 * case.
 *
 * switch (value) {
 *     case 1:
 *         // some code
 *         break;
 *     case 2:
 *         // some other code
 *         break;
 *
 *     default:
 *         assertNever(value);
 * }
 *
 * @format
 */

const assertNever = (x: unknown): never => {
	throw new Error("Unexpected object: " + x);
};

export default assertNever;
