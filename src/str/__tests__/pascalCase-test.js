/**
 * Test for the pascalCase module.
 *
 * @format
 */

// SUT
import pascalCase from "../pascalCase";

describe("pascalCase", () => {
	it("formats a PascalCase string", () => {
		expect(pascalCase("FooBar")).toStrictEqual("FooBar");
	});

	it("formats a CamelCase string", () => {
		expect(pascalCase("fooBar")).toStrictEqual("FooBar");
	});

	it("formats a snake_case string", () => {
		expect(pascalCase("foo_bar")).toStrictEqual("FooBar");
	});

	it("formats a kebab-case string", () => {
		expect(pascalCase("foo-bar")).toStrictEqual("FooBar");
	});
});
