/**
 * Util function to return the non-undefined (only) type to keep everything
 * strictly typed.
 * Use template string to give more context on what went wrong.
 *
 * Usage:
 *
 * const value = someFunction(); // Returns number | undefined
 * const numberValue = nullthrows(value, "Value is undefined.");
 * // numberValue is now of type "number"
 *
 * @format
 */
const undefinedThrows = <T>(x: T | undefined, msg?: string): T => {
	let prefix;

	if (x !== undefined) {
		return x;
	} else if (x === undefined) {
		prefix = "Got unexpected undefined";
	}

	if (msg != null) {
		throw new Error(`${prefix}: ${msg}`);
	} else {
		throw new Error(`${prefix}.`);
	}
};

export default undefinedThrows;
