/**
 * Returns the type of a particular string literal
 *
 * Converts a "string" literal into the string type, and many others.
 *
 *
 * The following types are supported:
 * - string -> "string"
 * - number -> "number"
 * - boolean -> "boolean"
 * - undefined -> "undefined"
 * - Function -> "function"
 * - Record<string, any> -> { [K in keyof T]: TypeToString<T[K]> }
 * - T -> any
 * - null -> "null"
 *
 * Note: This type uses a recursive call and an object will be broken down into
 * individual strings.
 *
 * @format
 */
/* eslint-disable @typescript-eslint/ban-types */
export type TypeToString<T> = T extends string
	? "string"
	: T extends number
	? "number"
	: T extends boolean
	? "boolean"
	: T extends undefined
	? "undefined"
	: T extends Function
	? "function"
	: T extends Record<string, any>
	? { [K in keyof T]: TypeToString<T[K]> }
	: T extends any
	? "any"
	: "null";
