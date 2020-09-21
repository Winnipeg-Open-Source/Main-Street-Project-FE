module.exports = {
    testRegex: '.*\.spec\.js?$',
    testPathIgnorePatterns: ['lib/', 'functions', 'node_modules/'],
    moduleFileExtensions: ['js', 'jsx', 'json'],
    collectCoverageFrom: [
        "src/**/*.js",
        "!src/**/*.story.js",
        "!src/index.js",
        "!src/serviceWorker.js",
        "!src/constants/*",
        "!src/context/**/*.js",
        "!src/storybook/**/*.js",
        "!src/tests/**/*.js",
        "!functions/**/*.ts"
    ],
    coveragePathIgnorePatterns: ['node_modules/'],
    coverageReporters: ['html'],
    setupFilesAfterEnv: ["./src/setupTests.js"],
};
