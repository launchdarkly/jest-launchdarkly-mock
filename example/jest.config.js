module.exports = {
  preset: 'ts-jest',
  setupFiles: ['jest-launchdarkly-mock'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['tsoutput'],
  verbose: true,
}
