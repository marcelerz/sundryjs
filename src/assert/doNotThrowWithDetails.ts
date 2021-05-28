/**
 * Handles the exception according to the environment.
 *
 * Use this function in try/catch exceptions when you do not want to throw, but
 * keep track of the issue in a development environment. The values will be
 * written to the console when `__DEV` is set, otherwise it will be ignored.
 *
 * If no `msg` was given, then it will try to derive it from the non-standard
 * `internalMessage` field and will fall back to the standard `message` field.
 * The `data` values will be printed with the `msg` in a collapsible console
 * entry.
 *
 * Usage:
 *
 * try {
 *     // some code that might throw an exception
 * } catch(Error err) {
 *     doNotThrowWithDetails(
 *         err,
 *         null, // use message from error
 *         { // Values which will be printed in the console log supporting debugging
 *             foo: 23,
 *         },
 *     );
 * }
 *
 * @format
 */

const doNotThrowWithDetails = (
	err: Error,
	msg?: string,
	data?: Record<string, unknown>,
): void => {
	msg =
		msg ||
		(err as any).internalMessage ||
		err.message ||
		"An unexpected error occurred.";

	if (__DEV) {
		console.groupCollapsed(msg);
		console.error(err);
		if (data) {
			console.log("Data:");
			console.table(data);
		}
		console.groupEnd();
	}
};

export default doNotThrowWithDetails;
