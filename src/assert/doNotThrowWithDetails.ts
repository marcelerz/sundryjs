/**
 * Handles the exception according to the environment.
 *
 * Use this function in try/catch exceptions when you do not want to throw,
 * but keep track of the issue.
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
