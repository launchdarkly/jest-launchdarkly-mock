## Contributing to jest-launchdarkly-mock
 
LaunchDarkly has published an [SDK contributor's guide](https://docs.launchdarkly.com/docs/sdk-contributors-guide) that 
provides a detailed explanation of how our SDKs work. See below for additional information on how to contribute to 
this mock library.
 
## Bugs and feature requests
  
The LaunchDarkly SDK team monitors the [issue tracker](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/issues) 
in this repository. Bug reports and feature requests should be filed in this issue tracker.
 
## Pull requests
 
We encourage [pull requests](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/pulls) and other contributions 
from the community. Before submitting pull requests, ensure that all temporary or unintended code is removed. 
Don't worry about adding reviewers to the pull request; the LaunchDarkly SDK team will add themselves.
 
Development
------------------
 
### Installation
 
```bash
yarn
```
  
### Testing
You can run unit tests or use the mock package in the [example app](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/tree/master/example)
included in this package.

#### Unit tests

```bash
yarn test
``` 

#### Test in example app
You can run the mocks in the [example app](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/tree/master/example)
by doing the following:

1. Build the mock package and copy output to the example app:
 
    ```bash
    yarn prep-dev
    ``` 

2. Running unit tests in the example app:
    ```
    cd example && yarn test
    ```
