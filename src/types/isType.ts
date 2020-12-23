/**
 * Type guard for runtime.
 *
 * Usage:
 *   const value = isType(<SomeType>, <Runtime check>);
 *
 * @format
 */

const isType = <T>(_value: unknown, condition: boolean): _value is T => {
	return condition;
};

export default isType;
