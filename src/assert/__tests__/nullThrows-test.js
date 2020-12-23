/**
 * Tests for the nullThrows module.
 *
 * @format
 */

// SUT
import nullThrows from "../nullThrows";

describe("nullThrows", () => {
	it("passes non-null values", () => {
		const numValue = nullThrows(53);
		expect(numValue).toStrictEqual(53);

		const strValue = nullThrows("foo");
		expect(strValue).toStrictEqual("foo");
	});

	it("fails on null value", () => {
		expect(() => {
			nullThrows(null);
		}).toThrow("Got unexpected null.");
	});

	it("fails on undefined", () => {
		expect(() => {
			nullThrows(undefined);
		}).toThrow("Got unexpected undefined.");
	});

	it("fails with custom message on null", () => {
		expect(() => {
			nullThrows(null, "Something is wrong here!");
		}).toThrow("Got unexpected null: Something is wrong here!");
	});

	it("fails with custom message on undefined", () => {
		expect(() => {
			nullThrows(undefined, "Something is wrong here!");
		}).toThrow("Got unexpected undefined: Something is wrong here!");
	});

	it("passes with custom message", () => {
		const result = nullThrows("foo", "Something is wrong here!");
		expect(result).toStrictEqual("foo");
	});
});
