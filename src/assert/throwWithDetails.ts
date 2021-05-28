/**
 * Handles the exception according to the environment.
 *
 * Use this function in try/catch exceptions when you still want to throw. This
 * is very similar to `doNotThrowWithDetails`, but it will throw an exception.
 * However, it will also in addition write the context data to the console in a
 * development environment when `__DEV` is set.
 *
 * No `msg` will automatically be derived in this case. The `data` values will
 * be printed with the `msg`, if available, in a collapsible console entry.
 *
 * The return value gives TypeScript context that it will never return.
 *
 * Usage:
 *
 * try {
 *     // some code that might throw an exception
 * } catch(Error err) {
 *     throwWithDetails(
 *         err, // Will re-throw this error
 *         null, // use message from error
 *         { // Values which will be printed in the console log supporting debugging
 *             foo: 23,
 *         },
 *     );
 * }
 *
 * @format
 */

const throwWithDetails = (
	err: Error,
	msg?: string,
	data?: Record<string, unknown>,
): never => {
	msg = msg || "An unexpected error occurred.";

	if (__DEV) {
		console.groupCollapsed(msg);
		console.error(err);
		if (data) {
			console.log("Data:");
			console.table(data);
		}
		console.groupEnd();
	}
	throw new Error(msg);
};

export default throwWithDetails;
