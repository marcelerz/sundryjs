/**
 * Converts an object with string keys to a typed object.
 *
 * Note: Make sure to mark the object as `<const>` as this is required.
 *
 *
 * Usage:
 *
 * const payload = <const>{
 *     id: "number",
 *     username: "string",
 * };
 * type Payload = ObjectPattern<typeof payload>;
 * // Payload is of type
 * // {
 * //   id: number,
 * //   username: string,
 * // }
 *
 * @format
 */

import type { StringToType } from "./StringToType";

export type ObjectPattern<T> = {
	readonly [K in keyof T]: StringToType<T[K]>;
};
