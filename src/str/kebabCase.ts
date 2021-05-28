/**
 * Converts a string to kebab-case.
 *
 * Examples:
 *   foo-bar -> foo-bar
 *   FooBar -> foo-bar
 *   fooBar -> foo-bar
 *   foo_bar -> foo-bar
 *
 * @format
 */

const pattern = /([A-Z_])/g;

const kebabCase = (str: string): string => {
	return str
		.replace(
			pattern,
			(_match: string, capture: string, offset: number): string => {
				if (offset === 0) {
					return capture;
				} else if (capture == "_") {
					return "-";
				} else {
					return "-" + capture;
				}
			},
		)
		.toLocaleLowerCase();
};

export default kebabCase;
