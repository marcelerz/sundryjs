/**
 * Test for the flatten module.
 *
 * @format
 */

// SUT
import flatten from "../flatten";

describe("flatten", () => {
	it("should flatten a double list", () => {
		expect(
			flatten([
				[2, 3],
				[4, 5],
				[6, 7],
			]),
		).toStrictEqual([2, 3, 4, 5, 6, 7]);
	});

	it("should handle different sizes", () => {
		expect(flatten([[2, 3], [4, 5, 6], [7]])).toStrictEqual([2, 3, 4, 5, 6, 7]);
	});

	it("should handle empty entries", () => {
		expect(flatten([[2, 3], [], [8, 9]])).toStrictEqual([2, 3, 8, 9]);
	});

	it("should handle an empty list", () => {
		expect(flatten([])).toStrictEqual([]);
	});
});
