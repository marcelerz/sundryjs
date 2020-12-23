/**
 * Test for the kebabCase module.
 *
 * @format
 */

// SUT
import kebabCase from "../kebabCase";

describe("kebabCase", () => {
	it("formats a PascalCase string", () => {
		expect(kebabCase("FooBar")).toStrictEqual("foo-bar");
	});

	it("formats a CamelCase string", () => {
		expect(kebabCase("fooBar")).toStrictEqual("foo-bar");
	});

	it("formats a snake_case string", () => {
		expect(kebabCase("foo_bar")).toStrictEqual("foo-bar");
	});

	it("formats a kebab-case string", () => {
		expect(kebabCase("foo-bar")).toStrictEqual("foo-bar");
	});
});
