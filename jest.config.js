module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['./src/index.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/node_modules'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
  moduleNameMapper: {
    'jest-launchdarkly-mock': '<rootDir>/src/index.ts',
  },
}
