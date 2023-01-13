Change log
================================================
 
All notable changes to the jest-launchdarkly-mock package will be documented in this file. This project adheres to 
[Semantic Versioning](https://semver.org).


## [v0.2.1](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/releases/tag/v0.2.1)  28-Jun-2021
- Added support to mock `withLDProvider`

## [v0.1.1](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/releases/tag/v0.1.1)  8-Oct-2020
- Initial release

## [2.0.2] - 2023-01-13
### Fixed:
- Updated example app's react and js sdk versions to fix typescript issues when running tests

## [2.0.1] - 2022-12-13
### Added:

- The `useLDClientError` mock function has been added. Thank you @manelmadeira.

## [2.0.0] - 2022-12-07
The latest version of jest-launchdarkly-mock supports LaunchDarkly's new custom contexts feature. Contexts are an evolution of a previously-existing concept, "users." For more information please read the [JavaScript SDK's latest release notes](https://github.com/launchdarkly/js-client-sdk/releases/tag/3.0.0).

For detailed information about this version, please refer to the list below. For information on how to upgrade from the previous version, please read the [migration guide](https://docs.launchdarkly.com/guides/infrastructure/unit-tests/?q=jest#migrating-from-users-to-contexts).

### Added:

- The `getContext` mock function has been added.

### Removed:

- The `getUser` mock function has been removed. Please use `getContext` instead.
- The `alias` mock function has been removed.

## [1.0.6] - 2022-07-08
### Chores
- Updated react peer dep to > 17

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
