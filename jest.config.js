module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.{js,jsx}'],
    coverageDirectory: './__test__/coverage',
    coverageReporters: ['html'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.css$': '<rootDir>/__test__/transform/css.js',
        '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/__test__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    setupFiles: ['<rootDir>/src/__test__/utils/setup.js'],
    snapshotSerializers: ['jest-serializer-html'],
};
