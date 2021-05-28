/**
 * Returns the first entry and will fail if there are none or more than one
 * entry available.
 *
 * Usage:
 *
 * const list = someFunction(); // Will return a list, but it is expected to be one entry
 * const entry = onlyX(list); // Fails when there is no or more than one entry
 *
 * @format
 */

import invariant from "../assert/invariant";

const onlyX = <T>(items: T[], msg?: string): T => {
	invariant(
		items.length === 1,
		msg || `Expected 1 item, but got ${items.length} items in the list.`,
	);
	return items[0];
};

export default onlyX;
