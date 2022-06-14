Change log
================================================
 
All notable changes to the jest-launchdarkly-mock package will be documented in this file. This project adheres to 
[Semantic Versioning](https://semver.org).


## [v0.2.1](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/releases/tag/v0.2.1)  28-Jun-2021
- Added support to mock `withLDProvider`

## [v0.1.1](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/releases/tag/v0.1.1)  8-Oct-2020
- Initial release

## [1.0.5] - 2022-06-14
### Chores
- Updated react peer dep to > 17

## [1.0.4] - 2022-06-14
### Chores
- Updated react peer dep to > 17

## [1.0.3] - 2022-05-27
### Fixed:
- Fix `withLDConsumer` to return children instead of null
- Only include dist folder on npm publish

## [1.0.2] - 2022-05-23
### Fixed:
- The .yarn folder is now excluded from the npm registry

## [1.0.1] - 2022-05-23
### Fixed:
- The .yarn folder is now excluded from the npm registry

## [1.0.0] - 2022-03-23
### Added:
- Snake case support
- Mock ldClient.alias

### Fixed:
- Mock AsyncWithLDProvider now returns a promise
