/**
 * Returns the first entry and will fail if none available.
 *
 * Usage:
 *
 * const firstEntry = firstX(list); // Fails when list is empty
 *
 * @format
 */

import invariant from "../assert/invariant";

const firstX = <T>(items: T[], msg?: string): T => {
	invariant(
		items.length > 0,
		msg || "Expected a first item, but no items are in the list.",
	);
	return items[0];
};

export default firstX;
