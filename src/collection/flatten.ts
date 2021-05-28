/**
 * Flattens a list within a list to only return a single-depth list.
 *
 * Usage:
 *
 * const complexList = [
 *     [1, 2, 3],
 *     [4, 5, 6],
 * ];
 * const thinList = flatten(complexList);
 * // thinList = [1, 2, 3, 4, 5, 6]
 *
 * @format
 */

const flatten = <T>(items: T[][]): T[] => {
	const result = [];
	for (const itemList of items) {
		for (const subItem of itemList) {
			result.push(subItem);
		}
	}
	return result;
};

export default flatten;
