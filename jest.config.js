module.exports = {
    verbose: true,
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.css$': '<rootDir>/__test__/transform/css.js',
        '^.+\\.svg$': '<rootDir>/__test__/transform/svg.js',
        '^(?!.*\\.json$)': '<rootDir>/__test__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/index.{js,jsx}',
        '!src/store/index.js',
    ],
    coverageDirectory: './__test__/coverage',
    coverageReporters: ['html', 'lcov'],
    setupFiles: ['<rootDir>/src/__test__/utils/setup.js', 'jest-canvas-mock'],
    snapshotSerializers: ['jest-serializer-html'],
};
