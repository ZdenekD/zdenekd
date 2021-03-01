module.exports = {
    verbose: true,
    transform: {
        '^.+\\.ts(x)?$': 'babel-jest',
        '^.+\\.svg$': '<rootDir>/__test__/transform/svg.js',
        '^(?!.*\\.json$)': '<rootDir>/__test__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    roots: ['<rootDir>/src'],
    moduleNameMapper: {'\\.css$': 'identity-obj-proxy'},
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
    ],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.{js,jsx,ts,tsx}',
        '!src/**/*.stories.{js,jsx,ts,tsx}',
        '!src/pages/*.{js,jsx,ts,tsx}',
        '!src/pages/**/*.{js,jsx,ts,tsx}',
        '!src/__test__/**/*',
    ],
    coverageDirectory: './__test__/coverage',
    coverageReporters: ['html', 'lcov'],
    setupFiles: ['<rootDir>/src/__test__/utils/setup.ts', 'jest-canvas-mock'],
    snapshotSerializers: ['jest-serializer-html'],
    globals: {'ts-jest': {tsconfig: '<rootDir>/tsconfig.test.json'}},
};
