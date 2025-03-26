module.exports = {
  preset: 'ts-jest',
  resetMocks: true,
  setupFiles: ['jest-launchdarkly-mock'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['tsoutput'],
  verbose: true,
}
