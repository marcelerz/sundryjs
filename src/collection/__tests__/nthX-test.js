/**
 * Test for the nthX module.
 *
 * @format
 */

// SUT
import nthX from "../nthX";

describe("nthX", () => {
	it("should return the first item", () => {
		expect(nthX([2, 3, 4, 5, 6], 0)).toStrictEqual(2);
	});

	it("should return the last item", () => {
		expect(nthX([2, 3, 4, 5, 6], 4)).toStrictEqual(6);
	});

	it("should return a middle item", () => {
		expect(nthX([2, 3, 4, 5, 6], 1)).toStrictEqual(3);
	});

	it("gets negative indexes", () => {
		expect(nthX([2, 3, 4, 5, 6], -4)).toStrictEqual(3);
		expect(nthX([2, 3, 4, 5, 6], -1)).toStrictEqual(6);
	});

	it("fails on overshooting negative idexes", () => {
		expect(() => {
			nthX([2, 3, 4, 5, 6], -6);
		}).toThrow(
			"Invariant Violation: Expected a item at position -6, but only 5 items are available in the list.",
		);
	});

	it("should fail on empty array with generic message", () => {
		expect(() => {
			nthX([], 1);
		}).toThrow(
			"Invariant Violation: Expected a item at position 1, but only 0 items are available in the list.",
		);
	});

	it("should fail on array with incorrect index with generic message", () => {
		expect(() => {
			nthX([2, 4], 5);
		}).toThrow(
			"Invariant Violation: Expected a item at position 5, but only 2 items are available in the list.",
		);
	});

	it("should fail with custom message", () => {
		expect(() => {
			nthX([], 1, "Did not work as expected.");
		}).toThrow("Invariant Violation: Did not work as expected.");
	});
});
