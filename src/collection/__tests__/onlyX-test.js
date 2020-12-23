/**
 * Test for the onlyX module.
 *
 * @format
 */

// SUT
import onlyX from "../onlyX";

describe("onlyX", () => {
	it("should return the only item", () => {
		expect(onlyX([3])).toStrictEqual(3);
	});

	it("should fail with more items with generic message", () => {
		expect(() => {
			onlyX([2, 6]);
		}).toThrow(
			"Invariant Violation: Expected 1 item, but got 2 items in the list.",
		);
	});

	it("should fail with fewer items with generic message", () => {
		expect(() => {
			onlyX([]);
		}).toThrow(
			"Invariant Violation: Expected 1 item, but got 0 items in the list.",
		);
	});

	it("should fail with custom message", () => {
		expect(() => {
			onlyX([], "Did not work as expected.");
		}).toThrow("Invariant Violation: Did not work as expected.");
	});
});
