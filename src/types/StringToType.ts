/**
 * Returns the type of a particular string literal
 *
 * Converts a "string" literal into the string type, and many others.
 *
 * @format
 */
/* eslint-disable @typescript-eslint/ban-types */
export type StringToType<T> = T extends "string"
	? string
	: T extends "number"
	? number
	: T extends "boolean"
	? boolean
	: T extends "undefined"
	? undefined
	: T extends "function"
	? Function
	: T extends "object"
	? Record<string, any>
	: never;
