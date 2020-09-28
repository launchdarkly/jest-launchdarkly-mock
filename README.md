# jest-launchdarkly-mock

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