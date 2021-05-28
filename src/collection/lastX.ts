/**
 * Returns the first entry and will fail if not available.
 *
 * Usage:
 *
 * const lastEntry = lastX(list); // Fails when list is empty
 *
 * @format
 */

import invariant from "../assert/invariant";

const lastX = <T>(items: T[], msg?: string): T => {
	invariant(
		items.length > 0,
		msg || "Expected a last item, but no items are in the list.",
	);
	return items[items.length - 1];
};

export default lastX;
