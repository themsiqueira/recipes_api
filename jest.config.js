module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
      '<rootDir>/**/(services)/**/*.ts',
      '!**/container/**/*.ts',
  ],
  setupFilesAfterEnv: ["jest-chain"],
  clearMocks: true,
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  globals: {
      'ts-jest': {
          diagnostics: false,
      },
  },
  coverageThreshold: {
      global: {
          statements: 42,
          branches: 34,
          functions: 36,
          lines: 42,
      },
  },
};