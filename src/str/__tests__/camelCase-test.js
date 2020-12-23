/**
 * Test for the camelCase module.
 *
 * @format
 */

// SUT
import camelCase from "../camelCase";

describe("camelCase", () => {
	it("formats a PascalCase string", () => {
		expect(camelCase("FooBar")).toStrictEqual("fooBar");
	});

	it("formats a CamelCase string", () => {
		expect(camelCase("fooBar")).toStrictEqual("fooBar");
	});

	it("formats a snake_case string", () => {
		expect(camelCase("foo_bar")).toStrictEqual("fooBar");
	});

	it("formats a kebab-case string", () => {
		expect(camelCase("foo-bar")).toStrictEqual("fooBar");
	});
});
