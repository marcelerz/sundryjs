/**
 * Returns the first entry and will fail if not available.
 *
 * @format
 */

import invariant from "assert/invariant";

const onlyX = <T>(items: T[], msg?: string): T => {
	invariant(
		items.length === 1,
		msg || `Expected 1 item, but got ${items.length} items in the list.`,
	);
	return items[0];
};

export default onlyX;
