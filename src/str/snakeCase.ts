/**
 * Converts a string to snake-case.
 *
 * Examples:
 *   foo-bar -> foo_bar
 *   FooBar -> foo_bar
 *   fooBar -> foo_bar
 *   foo_bar -> foo_bar
 *
 * @format
 */

const pattern = /([A-Z-])/g;

const snakeCase = (str: string): string => {
	return str
		.replace(
			pattern,
			(_match: string, capture: string, offset: number): string => {
				if (offset === 0) {
					return capture;
				} else if (capture == "-") {
					return "_";
				} else {
					return "_" + capture;
				}
			},
		)
		.toLocaleLowerCase();
};

export default snakeCase;
