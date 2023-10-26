module.exports = {
  preset: 'ts-jest',
  setupFiles: ['./src/index.ts'],
  resetMocks: true,
  testPathIgnorePatterns: ['<rootDir>/example/', '<rootDir>/node_modules/'],
}
