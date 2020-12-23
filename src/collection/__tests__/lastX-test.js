/**
 * Test for the lastX module.
 *
 * @format
 */

// SUT
import lastX from "../lastX";

describe("lastX", () => {
	it("should return the last item", () => {
		expect(lastX([2, 3])).toStrictEqual(3);
	});

	it("should fail with generic message", () => {
		expect(() => {
			lastX([]);
		}).toThrow(
			"Invariant Violation: Expected a last item, but no items are in the list.",
		);
	});

	it("should fail with custom message", () => {
		expect(() => {
			lastX([], "Did not work as expected.");
		}).toThrow("Invariant Violation: Did not work as expected.");
	});
});
