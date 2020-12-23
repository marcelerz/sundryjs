/**
 * Defines an opaque type for TypeScript.
 *
 * @format
 */

export type Opaque<K, T> = T & { __TYPE__: K };
