/**
 * Test for the firstX module.
 *
 * @format
 */

// SUT
import firstX from "../firstX";

describe("firstX", () => {
	it("should return the first item", () => {
		expect(firstX([2, 3])).toStrictEqual(2);
	});

	it("should fail with generic message", () => {
		expect(() => {
			firstX([]);
		}).toThrow(
			"Invariant Violation: Expected a first item, but no items are in the list.",
		);
	});

	it("should fail with custom message", () => {
		expect(() => {
			firstX([], "Did not work as expected.");
		}).toThrow("Invariant Violation: Did not work as expected.");
	});
});
