jest.mock('launchdarkly-react-client-sdk', () => ({ useFlags: jest.fn() }))

const kebabCase = require('lodash.kebabcase')
const camelCase = require('lodash.camelcase')
const { useFlags } = require('launchdarkly-react-client-sdk')

const mockFlags = (flags) =>
  useFlags.mockImplementation(() => {
    const result = {}
    Object.keys(flags).forEach((k) => {
      const kebab = kebabCase(k)
      const camel = camelCase(k)
      result[kebab] = flags[k]
      result[camel] = flags[k]
    })
    return result
  })

module.exports = { mockFlags }
