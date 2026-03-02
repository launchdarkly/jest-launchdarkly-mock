Change log
================================================
 
All notable changes to the jest-launchdarkly-mock package will be documented in this file. This project adheres to 
[Semantic Versioning](https://semver.org).


## [2.2.1](https://github.com/launchdarkly/jest-launchdarkly-mock/compare/jest-launchdarkly-mock-v2.2.0...jest-launchdarkly-mock-v2.2.1) (2026-03-02)


### Bug Fixes

* adding initialize mock ([#100](https://github.com/launchdarkly/jest-launchdarkly-mock/issues/100)) ([03e6798](https://github.com/launchdarkly/jest-launchdarkly-mock/commit/03e67986a2a95c4bfc534266c5a4da6d288e0af1))

## [2.2.0](https://github.com/launchdarkly/jest-launchdarkly-mock/compare/jest-launchdarkly-mock-v2.1.0...jest-launchdarkly-mock-v2.2.0) (2026-02-25)


### Features

* **withLDProvider:** adding mock support for withLDProvider ([#9](https://github.com/launchdarkly/jest-launchdarkly-mock/issues/9)) ([488a33d](https://github.com/launchdarkly/jest-launchdarkly-mock/commit/488a33d5272bf47b59b85e6afe8dfa954b7ce032))


### Bug Fixes

* adding missing functions ([af6d0f4](https://github.com/launchdarkly/jest-launchdarkly-mock/commit/af6d0f40d2a4a615382e0a0c13e0aba4e0e87cbc))
* adding missing functions ([19dd6fd](https://github.com/launchdarkly/jest-launchdarkly-mock/commit/19dd6fd79d2d4e8b269a0b7258c23d15c5ada28f))
* adding missing functions ([8d72df3](https://github.com/launchdarkly/jest-launchdarkly-mock/commit/8d72df3110bee9104b6413f29b7c82d6c6bceba7))
* mockWithLDConsumer should not return null ([806bd8a](https://github.com/launchdarkly/jest-launchdarkly-mock/commit/806bd8a2d7ebb2d6e08a39c67ea8fc9abaa7b816))
* mockWithLDConsumer should not return null ([e9cc53a](https://github.com/launchdarkly/jest-launchdarkly-mock/commit/e9cc53ad93a523c76f0ecc3ad09e2ca392dc73d2))
* update LDProvider mock to match implementation signature ([d1c6eb6](https://github.com/launchdarkly/jest-launchdarkly-mock/commit/d1c6eb6bfee16ad154f4c62d5adba60e879a7a11))
* update LDProvider mock to match implementation signature ([6389c5f](https://github.com/launchdarkly/jest-launchdarkly-mock/commit/6389c5f3128339008919f13ed86c5848c9a13a02))

## [v0.2.1](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/releases/tag/v0.2.1)  28-Jun-2021
- Added support to mock `withLDProvider`

## [v0.1.1](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/releases/tag/v0.1.1)  8-Oct-2020
- Initial release

## [2.1.0] - 2023-06-06
### Changed:
- useFlags now returns an empty object by default, which matches its actual implementation.

## [2.0.3] - 2023-01-13
### Changed:
- Improved mockFlags docs to make it clear it only works with useFlags

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
