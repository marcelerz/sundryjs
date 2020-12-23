/**
 * Converts and object with string keys for types into a real object type.
 *
 * Note: Make sure to mark object as "<const>".
 *
 * Example:
 *   const payload = <const>{
 *     id: "number",
 *     username: "string",
 *   };
 *   type Payload = ObjectPattern<typeof payload>;
 *
 *  @format
 */

import type { StringToType } from "./StringToType";

export type ObjectPattern<T> = {
	readonly [K in keyof T]: StringToType<T[K]>;
};
