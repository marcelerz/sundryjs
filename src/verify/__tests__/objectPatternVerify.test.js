/**
 * Tests for the objectPatternVerify module.
 *
 * @format
 */

// SUT
import objectPatternVerify from "../objectPatternVerify";

const pattern = {
	name: "string",
	age: "number",
	married: "boolean",
	jobSearch: "undefined",
	call: "function",
	details: "object",
};

const values = {
	name: "John Doe",
	age: 23,
	married: false,
	jobSearch: undefined,
	call: () => ({}),
	details: {
		foo: "bar",
		spam: 42,
	},
};

describe("objectPatternVerify", () => {
	it("verifies good value", () => {
		const result = objectPatternVerify("Test value", pattern, values);
		expect(result).toStrictEqual(values);
	});

	it("fails with incorrect string", () => {
		const localValues = {
			...values,
			name: 41,
		};
		const result = objectPatternVerify("Test value", pattern, localValues);
		expect(result).toBeNull();
	});

	it("fails with incorrect number", () => {
		const localValues = {
			...values,
			name: 41,
		};
		const result = objectPatternVerify("Test value", pattern, localValues);
		expect(result).toBeNull();
	});

	it("fails with incorrect boolean", () => {
		const localValues = {
			...values,
			name: 41,
		};
		const result = objectPatternVerify("Test value", pattern, localValues);
		expect(result).toBeNull();
	});

	it("fails with incorrect undefined", () => {
		const localValues = {
			...values,
			name: 41,
		};
		const result = objectPatternVerify("Test value", pattern, localValues);
		expect(result).toBeNull();
	});

	it("fails with incorrect function", () => {
		const localValues = {
			...values,
			name: 41,
		};
		const result = objectPatternVerify("Test value", pattern, localValues);
		expect(result).toBeNull();
	});

	it("fails with incorrect object", () => {
		const localValues = {
			...values,
			name: 41,
		};
		const result = objectPatternVerify("Test value", pattern, localValues);
		expect(result).toBeNull();
	});
});
