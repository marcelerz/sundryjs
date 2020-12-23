/**
 * Tests for the invariant module.
 *
 * @format
 */

// SUT
import invariant from "../invariant";

describe("invariant", () => {
	it("passes on true", () => {
		expect(invariant(true)).toBeUndefined();
	});

	it("fails on false", () => {
		expect(() => {
			invariant(false);
		}).toThrow("Invariant Violation.");
	});

	it("accepts a custom message", () => {
		expect(() => {
			invariant(false, "Something went wrong.");
		}).toThrow("Invariant Violation: Something went wrong.");
	});
});
