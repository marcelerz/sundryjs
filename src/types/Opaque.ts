/**
 * Defines an opaque type for TypeScript.
 *
 * Note: Make sure you give the `K` a unique identifier across the system.
 *
 *
 * Usage:
 *
 * // A function which requires a specific type
 * function login(userID: UserID): void {
 *     // Do the login
 * }
 *
 * // Define Opaque type
 * type UserID = Opaque<"UserID", number>;
 *
 * // Define a function to convert from a number value to the Opaque type
 * function makeUserID(userID: number): UserID {
 *     return userID as UserID;
 * }
 *
 * // Convert a validated input to the Opaque value
 * const user_id = makeUserID(validateUserID(input_user_id));
 *
 * // Call function
 * login(user_id);
 *
 * // Will FAIL
 * login(input_user_id);
 *
 * @format
 */

export type Opaque<K, T> = T & { __TYPE__: K };
