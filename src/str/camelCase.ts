/**
 * Converts a string to camel-case.
 *
 * Examples:
 *   foo-bar -> fooBar
 *   FooBar -> fooBar
 *   fooBar -> fooBar
 *   foo_bar -> fooBar
 *
 * @format
 */

const pattern = /[_-]([a-zA-Z])/g;

const camelCase = (str: string): string => {
	return (
		str.substring(0, 1).toLocaleLowerCase() +
		str
			.substring(1)
			.replace(pattern, (_match: string, capture: string): string =>
				capture.toLocaleUpperCase(),
			)
	);
};

export default camelCase;
