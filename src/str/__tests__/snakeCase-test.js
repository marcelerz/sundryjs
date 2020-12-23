/**
 * Test for the snakeCase module.
 *
 * @format
 */

// SUT
import snakeCase from "../snakeCase";

describe("snakeCase", () => {
	it("formats a PascalCase string", () => {
		expect(snakeCase("FooBar")).toStrictEqual("foo_bar");
	});

	it("formats a CamelCase string", () => {
		expect(snakeCase("fooBar")).toStrictEqual("foo_bar");
	});

	it("formats a snake_case string", () => {
		expect(snakeCase("foo_bar")).toStrictEqual("foo_bar");
	});

	it("formats a kebab-case string", () => {
		expect(snakeCase("foo-bar")).toStrictEqual("foo_bar");
	});
});
