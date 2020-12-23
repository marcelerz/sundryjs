/**
 * Util function to check if a value is non-null (or undefined).
 *
 * This helps in code when we receive a nullable value (e.g. ?string),
 * then we can call nullThrows() on it and it will return a non-null type,
 * satisfying typescript and making sure we keep everything strictly typed.
 * Be careful since this will throw an exception. So, only call this if you are
 * really sure that the value should be non-null.
 *
 * Supply the msg value to describe what should have been expected to be
 * non-null.
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
