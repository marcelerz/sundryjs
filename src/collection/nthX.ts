/**
 * Returns the first entry and will fail if not available.
 *
 * Note: The index starts at zero.
 *
 * If `msg` is not given, a useful message will be returned.
 *
 * Should the xth entry be `undefined`, then it _will_ trigger an error.
 *
 * Usage:
 *
 * const fifthEntry = nthX(list, 4); // Fails when there is no 5th entry
 *
 * @format
 */

import invariant from "../assert/invariant";

const nthX = <T>(items: T[], idx: number, msg?: string): T => {
	invariant(
		items.length > (idx >= 0 ? idx : Math.abs(idx) - 1),
		msg ||
			`Expected a item at position ${idx}, but only ${items.length} items are available in the list.`,
	);
	const actualIdx = idx >= 0 ? idx : items.length + idx;
	const result = items[actualIdx];
	invariant(
		result !== undefined,
		msg || `Expected a item at position ${idx}, but got undefined.`,
	);
	return result;
};

export default nthX;
