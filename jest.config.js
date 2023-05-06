const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
	moduleDirectories: ["node_modules", "<rootDir>"],
});

const makeModuleNameMapper = (srcPath, tsconfigPath) => {
	// Get paths from tsconfig
	const { paths } = require(tsconfigPath).compilerOptions;

	const aliases = {};

	// Iterate over paths and convert them into moduleNameMapper format
	Object.keys(paths).forEach((item) => {
		const key = item.replace("/*", "/(.*)");
		const path = paths[item][0].replace("/*", "/$1");
		aliases[key] = srcPath + "/" + path;
	});
	return aliases;
};

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleNameMapper: makeModuleNameMapper("<rootDir>", "./tsconfig.json"),
	testEnvironment: "jest-environment-jsdom",
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
	roots: ["<rootDir>"],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)",
	],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
	transformIgnorePatterns: [
		"/node_modules/",
		"^.+\\.module\\.(css|sass|scss)$",
	],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
