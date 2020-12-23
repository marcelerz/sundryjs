/**
 * Determines if two object have the same properties.
 *
 * @format
 */

const hasSameProperties = (
	a: Record<string | number | symbol, any>,
	b: Record<string | number | symbol, any>,
): boolean => {
	const aProps = Object.getOwnPropertyNames(a);
	const bProps = Object.getOwnPropertyNames(b);

	if (aProps.length !== bProps.length) {
		return false;
	}

	for (let i = 0; i < aProps.length; i++) {
		const propName = aProps[i];

		if (a[propName] !== b[propName]) {
			return false;
		}
	}

	return true;
};

export default hasSameProperties;
