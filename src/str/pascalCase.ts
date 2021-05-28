/**
 * Converts a string to pascal-case.
 *
 * Examples:
 *   foo-bar -> FooBar
 *   FooBar -> FooBar
 *   fooBar -> FooBar
 *   foo_bar -> FooBar
 *
 * @format
 */

const pattern = /[_-]([a-zA-Z])/g;

const pascalCase = (str: string): string => {
	return (
		str.substring(0, 1).toLocaleUpperCase() +
		str
			.substring(1)
			.replace(pattern, (_match: string, capture: string): string =>
				capture.toLocaleUpperCase(),
			)
	);
};

export default pascalCase;
