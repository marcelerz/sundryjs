/**
 * Flattens a list within a list to only return a single-depth list.
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
