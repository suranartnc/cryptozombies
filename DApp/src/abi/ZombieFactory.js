export default [
  {
    constant: true,
    inputs: [[Object]],
    name: 'zombies',
    outputs: [[Object], [Object], [Object], [Object], [Object], [Object]],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [[Object]],
    name: 'zombieToOwner',
    outputs: [[Object]],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [[Object]],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [[Object]],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [[Object], [Object], [Object]],
    name: 'NewZombie',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [[Object], [Object]],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    constant: false,
    inputs: [[Object]],
    name: 'createRandomZombie',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [[Object]],
    name: 'greet',
    outputs: [[Object]],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  }
]
