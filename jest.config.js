module.exports = {
    verbose: false,
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.ts(x)?$': 'babel-jest',
        '^.+\\.svg$': '<rootDir>/__test__/jest/transform/svg.js',
        '^(?!.*\\.json$)': '<rootDir>/__test__/jest/transform/file.js',
    },
    roots: ['<rootDir>/src'],
    resolver: '<rootDir>/__test__/jest/resolver.ts',
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
        '@/assets(.*)': '<rootDir>/src/assets/$1',
        '@/components(.*)': '<rootDir>/src/components/$1',
        '@/UI(.*)': '<rootDir>/src/components/UI/$1',
        '@/data(.*)': '<rootDir>/src/data/$1',
        '@/db(.*)': '<rootDir>/src/database/$1',
        '@/store(.*)': '<rootDir>/src/store/$1',
        '@/api(.*)': '<rootDir>/src/utils/api/$1',
        '@/distributors(.*)': '<rootDir>/src/utils/distributors/$1',
        '@/enums(.*)': '<rootDir>/src/utils/enums/$1',
        '@/helpers(.*)': '<rootDir>/src/utils/helpers/$1',
        '@/hooks(.*)': '<rootDir>/src/utils/hooks/$1',
        '@/mocks(.*)': '<rootDir>/src/utils/mocks/$1',
        '@/types(.*)': '<rootDir>/src/types/$1',
        '@/utils(.*)': '<rootDir>/src/utils/$1',
        '@/public(.*)': '<rootDir>/public/$1',
        '@/test(.*)$': '<rootDir>/__test__/jest/$1',
        '@/test/mocks(.*)$': '<rootDir>/__test__/jest/mocks/$1',
    },
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
    ],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.{ts,tsx}',
        '!src/store/index.{ts,tsx}',
        '!src/**/*.stories.{ts,tsx}',
        '!src/pages/*.{ts,tsx}',
        '!src/pages/**/*.{ts,tsx}',
        '!src/utils/animations/**/*',
        '!src/utils/distributors/**/*',
        '!src/utils/enums/**/*',
        '!src/utils/mocks/**/*',
        '!src/types/*',
        '!src/types/**/*',
        '!src/**/types/*',
        '!src/**/data/*',
    ],
    coverageDirectory: './__test__/jest/coverage',
    coverageReporters: ['html', 'lcov'],
    setupFiles: ['<rootDir>/__test__/jest/setup.ts', 'jest-canvas-mock'],
    setupFilesAfterEnv: ['<rootDir>/__test__/jest/mockSetup.ts'],
    snapshotSerializers: ['jest-serializer-html'],
};
