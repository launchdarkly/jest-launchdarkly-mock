# jest-launchdarkly-mock

[![npm version](https://img.shields.io/npm/v/jest-launchdarkly-mock.svg)](https://www.npmjs.com/package/jest-launchdarkly-mock) 
[![npm downloads](https://img.shields.io/npm/dm/jest-launchdarkly-mock.svg)](https://www.npmjs.com/package/jest-launchdarkly-mock)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com/)

[![Star on GitHub](https://img.shields.io/github/stars/launchdarkly-labs/jest-launchdarkly-mock?style=social)](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/stargazers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/launchdarkly-labs/jest-launchdarkly-mock.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20jest-launchdarkly-mock%20by%20%40launchdarkly%20https%3A%2F%2Fgithub.com%2Flaunchdarkly-labs%2Fjest-launchdarkly-mock%20%F0%9F%91%8D)

## Installation

```bash
yarn -D jest-launchdarkly-mock
```

or

```bash
npm install jest-launchdarkly-mock --save-dev
```

Then in `jest.config.js` add jest-launchdarkly-mock to setupFiles: 

```js
// jest.config.js
module.exports = {
  setupFiles: ['jest-launchdarkly-mock'],
}
```

## Usage
Use the only 3 apis for test cases:

* `mockFlags(flags: LDFlagSet, Options?: mockFlagsOptions)`: mock flags at the start of each test case. 
###### Options
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| skipFormatting(optional) | boolean | false | If true, flags will not be formatting to camelCase or kebab-case |

* `ldClientMock`: a jest mock of the [ldClient](https://launchdarkly.github.io/js-client-sdk/interfaces/_launchdarkly_js_client_sdk_.ldclient.html). All
methods of this object are jest mocks.

* `resetLDMocks` : resets both mockFlags and ldClientMock.

## Example
```tsx
import { mockFlags, ldClientMock, resetLDMocks } from 'jest-launchdarkly-mock'

describe('button', () => {
  beforeEach(() => {
    // reset before each test case
    resetLDMocks()
  })

  test('flag on', () => {
      // arrange: You can use kebab-case or camelCase keys
      mockFlags({ devTestFlag: true })
  
      // act
      const { getByTestId } = render(<Button />)

      // assert
      expect(getByTestId('test-button')).toBeTruthy()
    })

  test('identify', () => {
    // arrange
    mockFlags({ 'dev-test-flag': true })
    
    // act
    const { getByTestId } = render(<Button />)
    fireEvent.click(getByTestId('test-button'))

    // assert: identify gets called
    expect(ldClientMock.identify).toBeCalledWith({ key: 'aa0ceb' })
  })
})

```
