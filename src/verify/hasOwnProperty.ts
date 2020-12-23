/**
 * Safer wrapper around hasOwnProperty.
 *
 * See https://eslint.org/docs/rules/no-prototype-builtins
 *
 * @format
 */

const hasOwnProperty = (
	obj: Record<string, unknown>,
	property: string,
): boolean => {
	return Object.prototype.hasOwnProperty.call(obj, property);
};

export default hasOwnProperty;
