/**
 * Util function to return the non-null (and non-undefined) type to keep
 * everything strictly typed.
 * Use template string to give more context on what went wrong.
 *
 * Usage:
 *
 * const value = someFunction(); // Returns number | null | undefined
 * const numberValue = nullthrows(value, "Value is null.");
 * // numberValue is now of type "number"
 *
 * @format
 */
const nullThrows = <T>(x: T | null | undefined, msg?: string): T => {
	let prefix;

	if (x != null) {
		return x;
	} else if (x === undefined) {
		prefix = "Got unexpected undefined";
	} else if (x === null) {
		prefix = "Got unexpected null";
	}

	if (msg != null) {
		throw new Error(`${prefix}: ${msg}`);
	} else {
		throw new Error(`${prefix}.`);
	}
};

export default nullThrows;
