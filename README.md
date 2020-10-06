# jest-launchdarkly-mock

[![npm version](https://img.shields.io/npm/v/jest-launchdarkly-mock.svg)](https://www.npmjs.com/package/jest-launchdarkly-mock) 
[![npm downloads](https://img.shields.io/npm/dm/jest-launchdarkly-mock.svg)](https://www.npmjs.com/package/jest-launchdarkly-mock)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com/)

[![Star on GitHub](https://img.shields.io/github/stars/yusinto/jest-launchdarkly-mock?style=social)](https://github.com/launchdarkly-labs/jest-launchdarkly-mock/stargazers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/launchdarkly-labs/jest-launchdarkly-mock.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20jest-launchdarkly-mock%20by%20%40launchdarkly%20https%3A%2F%2Fgithub.com%2Flaunchdarkly-labs%2Fjest-launchdarkly-mock%20%F0%9F%91%8D)

### Installation

```bash
yarn -D jest-launchdarkly-mock

or 

npm install jest-launchdarkly-mock --save-dev
```

In your `jest.config.js` add jest-launchdarkly-mock to setupFiles: 

```js
module.exports = {
  setupFiles: ['jest-launchdarkly-mock'],
}
```

### Usage
There are 2 apis: mockFlags and ldClientMock.

mockFlags is a function which takes a flag object. 

ldClientMock is a jest mock of the ldClient object. 

```tsx
import { mockFlags, ldClientMock } from 'jest-launchdarkly-mock'

describe('button', () => {
  test('flag on', () => {
    mockFlags({ devTestFlag: true }) // set fake flags
    const { asFragment } = render(<Button />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('track', () => {
    mockFlags({ 'dev-test-flag': true })
    const { getByTestId } = render(<Button />)
    fireEvent.click(getByTestId('test-button'))

    // assert ldClient methods
    expect(ldClientMock.track).toBeCalledWith('button-click')
  })
})

```