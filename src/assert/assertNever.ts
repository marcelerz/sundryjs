/**
 * A funtion that fails for all calls.
 *
 * This is used for exhausive checking switches and similar use-cases.
 *
 * @format
 */

const assertNever = (x: unknown): never => {
	throw new Error("Unexpected object: " + x);
};

export default assertNever;
