module.exports = {
    rootDir: '.',
    roots: ['<rootDir>/api/src'],
    moduleDirectories: ['node_modules'],
    collectCoverageFrom: [
      '<rootDir>/api/src/**/*.ts',
      '!<rootDir>/api/src/routes.ts',
      '!<rootDir>/api/src/server.ts',
      '!<rootDir>/api/src/database/**/*',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/api/src/**/*.spec.ts'],
    transform: {
        '.+\\.ts$': 'ts-jest',
    },
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  }
  