/**
 * Use invariant() to assert a state which your program assumes to be true.
 *
 * Use template string to give more context on what went wrong.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 *
 * Usage:
 *
 * const value = someFunction(); // Might be any type
 * invariant(typeof value === "string", "Value is not a string.");
 * // Can be sure it is a string now
 *
 * @format
 */
function invariant(condition: unknown, msg?: string): asserts condition {
	if (!condition) {
		let error;

		if (msg != null && __VERBOSE) {
			error = new Error(`Invariant Violation: ${msg}`);
		} else {
			error = new Error("Invariant Violation.");
		}
		error.name = "Invariant Violation";

		throw error;
	}
}

export default invariant;
