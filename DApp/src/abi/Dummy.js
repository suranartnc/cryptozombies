export default [
  {
    constant: true,
    inputs: [{ name: '_message', type: 'string' }],
    name: 'greet',
    outputs: [{ name: 'message', type: 'string' }],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  }
]
