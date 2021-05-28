/**
 * Type guard for runtime. It converts an input type to an output type according
 * to some condition defined.
 *
 * Usage:
 *
 * const value = isType(inputValue, typeof inputValue = "string");
 *
 * @format
 */

const isType = <T>(_value: unknown, condition: boolean): _value is T => {
	return condition;
};

export default isType;
