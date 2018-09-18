export default [
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'zombies',
    outputs: [
      { name: 'name', type: 'string' },
      { name: 'dna', type: 'uint256' },
      { name: 'level', type: 'uint32' },
      { name: 'readyTime', type: 'uint32' },
      { name: 'winCount', type: 'uint16' },
      { name: 'lossCount', type: 'uint16' }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'zombieToOwner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'zombieId', type: 'uint256' },
      { indexed: false, name: 'name', type: 'string' },
      { indexed: false, name: 'dna', type: 'uint256' }
    ],
    name: 'NewZombie',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'previousOwner', type: 'address' },
      { indexed: true, name: 'newOwner', type: 'address' }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    constant: false,
    inputs: [{ name: '_name', type: 'string' }],
    name: 'createRandomZombie',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '_name', type: 'string' }],
    name: 'greet',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  }
]
