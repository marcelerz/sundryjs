/**
 * Tests for the undefinedThrows module.
 *
 * @format
 */

// SUT
import undefinedThrows from "../undefinedThrows";

describe("undefinedThrows", () => {
	it("passes non-null values", () => {
		const numValue = undefinedThrows(53);
		expect(numValue).toStrictEqual(53);

		const strValue = undefinedThrows("foo");
		expect(strValue).toStrictEqual("foo");
	});

	it("should not fail on null value", () => {
		expect(undefinedThrows(null)).toBeNull();
	});

	it("fails on undefined", () => {
		expect(() => {
			undefinedThrows(undefined);
		}).toThrow("Got unexpected undefined.");
	});

	it("fails with custom message on undefined", () => {
		expect(() => {
			undefinedThrows(undefined, "Something is wrong here!");
		}).toThrow("Got unexpected undefined: Something is wrong here!");
	});

	it("passes with custom message", () => {
		const result = undefinedThrows("foo", "Something is wrong here!");
		expect(result).toStrictEqual("foo");
	});
});
