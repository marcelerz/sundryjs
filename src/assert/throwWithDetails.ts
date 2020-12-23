/**
 * Handles the exception according to the environment.
 *
 * Use this function in try/catch exceptions when you still want to throw.
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