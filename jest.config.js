/**
 * Configuration file for Jest testing environment
 *
 * @format
 */

module.exports = {
	roots: ["<rootDir>/src"],
	setupFiles: ["<rootDir>/jest.setup.js"],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$",
	collectCoverageFrom: ["**/*.{js,ts,tsx}"],
	coveragePathIgnorePatterns: [
		"/dist/",
		"/coverage/",
		"/.vscode/",
		"/node_modules/",
	],
	coverageThreshold: {
		global: {
			lines: 20,
		},
	},
	testPathIgnorePatterns: [
		"<rootDir>/dist/",
		"<rootDir>/coverage/",
		"<rootDir>/node_modules/",
	],
	coverageReporters: ["json", "lcov", "text", "text-summary", "html"],
	moduleFileExtensions: ["ts", "tsx", "js"],
	restoreMocks: true,
	testTimeout: 300,
};
