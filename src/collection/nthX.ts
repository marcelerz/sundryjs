/**
 * Returns the first entry and will fail if not available.
 *
 * @format
 */

import invariant from "assert/invariant";

const nthX = <T>(items: T[], idx: number, msg?: string): T => {
	invariant(
		items.length > (idx >= 0 ? idx : Math.abs(idx) - 1),
		msg ||
			`Expected a item at position ${idx}, but only ${items.length} items are in the list.`,
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
