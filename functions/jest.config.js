module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '.*\.spec\.ts',
    testPathIgnorePatterns: ['lib/', 'node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    collectCoverageFrom: ['./src/**/*.ts'],
    coveragePathIgnorePatterns: ['node_modules/'],
    coverageReporters: ['html'],
};
