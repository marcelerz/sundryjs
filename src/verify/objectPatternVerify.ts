/**
 * Verifies that a specific object has the structure as defined in an object
 * pattern. It will throw when the type is not as expected.
 *
 * Usage:
 *   const pattern = {
 *   	name: "string",
 *   	age: "number",
 *   };
 *   const values = {
 *   	name: "John Doe",
 *   	age: 23,
 *   };
 *   const result = objectPatternVerify("<What is this?>", pattern, values);
 *
 * @format
 */

import invariant from "assert/invariant";

/**
 * Valid values as types in object pattern
 */
type ObjectPatternTypes =
	| "string"
	| "number"
	| "boolean"
	| "undefined"
	| "function"
	| "object";

const objectPatternVerify = <T>(
	desc: string,
	pattern: Record<string, ObjectPatternTypes>,
	values: T,
	options?: { fail?: boolean },
): T | null => {
	const isValid = Object.keys(pattern).every((key) => {
		const type = pattern[key];
		const value = (values as any)[key];
		const isValid = value !== null && typeof value === type;
		if (!isValid && options?.fail) {
			invariant(
				isValid,
				`Pattern "${desc}" for "${key}" was expected to be ${type} but got ${typeof value}.`,
			);
		}
		return isValid;
	});
	if (!isValid) {
		if (__DEV) {
			console.groupCollapsed(desc + " has unexpected pattern.");
			console.warn("Actual:");
			console.table(values);
			console.warn("Expected pattern:");
			console.table(pattern);
			console.trace();
			console.groupEnd();
		}
		return null;
	}
	return values;
};
export default objectPatternVerify;
