module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: './__tests__/coverage',
    coverageReporters: ['html'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.css$': '<rootDir>/__tests__/transform/css.js',
        '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/__tests__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    setupFiles: ['<rootDir>/__tests__/utils/setup.js'],
};
