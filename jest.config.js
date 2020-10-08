module.exports = {
  preset: 'ts-jest',
  setupFiles: ['./src/index.ts'],
  testPathIgnorePatterns: ['<rootDir>/example/', '<rootDir>/node_modules/'],
}
