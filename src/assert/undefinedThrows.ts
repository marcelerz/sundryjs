/**
 * Util function to check if a value is non-undefined.
 *
 * This helps in code when we receive an undefined value (e.g. key?: string),
 * then we can call undefinedThrows() on it and it will return a non-undefined
 * type, satisfying typescript and making sure we keep everything strictly
 * typed. Be careful since this will throw an exception. So, only call this if
 * you are really sure that the value should be non-undefined.
 *
 * Supply the msg value to describe what should have been expected to be
 * non-undefined.
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
