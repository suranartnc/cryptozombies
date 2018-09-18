import Web3 from 'web3'

import zombieOwnershipAbi from './abi/zombieOwnership'

export default class CryptoZombie {
  constructor(mode = 'local') {
    if (mode !== 'local') {
      this.web3 = new Web3(window.web3.currentProvider)
    } else {
      this.web3 = new Web3(
        new Web3.providers.WebsocketProvider('ws://localhost:7545')
      )
    }

    this.zombieOwnershipAddr = '0x06120a7a83d6ef2c727fdc4307141ab7ebbafd84'

    this.zombieOwnership = new this.web3.eth.Contract(
      zombieOwnershipAbi,
      this.zombieOwnershipAddr
    )

    this.loadUserAddress().then(account => {
      this.account = account
    })
  }

  async loadUserAddress() {
    const accounts = await this.web3.eth.getAccounts()
    return accounts[3]
  }

  listenToNewZombie(callback) {
    this.zombieOwnership.once('NewZombie', function(error, event) {
      if (error) return

      callback(event.returnValues)
    })
  }

  log(taskName, address, info = '') {
    console.log(`Calling ${taskName} by ${address}`, info)
  }

  async createRandomZombie(name) {
    try {
      this.log('createRandomZombie', this.account)

      return await this.zombieOwnership.methods.createRandomZombie(name).send({
        from: this.account,
        gas: '1000000'
      })
    } catch (error) {
      console.error(error)
    }
  }

  async getOwnerByZombieId(zombieId) {
    try {
      this.log('getOwnerByZombieId', this.account)

      return await this.zombieOwnership.methods.zombieToOwner(zombieId).call()
    } catch (error) {
      console.error(error)
    }
  }

  async getZombieDetails(zombieId) {
    try {
      this.log('getZombieDetails', this.account)

      return await this.zombieOwnership.methods.zombies(zombieId).call()
    } catch (error) {
      console.error(error)
    }
  }

  async getZombiesByOwner() {
    try {
      this.log('getZombiesByOwner', this.account)

      return await this.zombieOwnership.methods
        .getZombiesByOwner(this.account)
        .call()
    } catch (error) {
      console.error(error)
    }
  }

  generateZombie(id, name, dna) {
    let dnaStr = String(dna)
    // pad DNA with leading zeroes if it's less than 16 characters
    while (dnaStr.length < 16) dnaStr = '0' + dnaStr

    let zombieDetails = {
      // first 2 digits make up the head. We have 7 possible heads, so % 7
      // to get a number 0 - 6, then add 1 to make it 1 - 7. Then we have 7
      // image files named "head1.png" through "head7.png" we load based on
      // this number:
      headChoice: (dnaStr.substring(0, 2) % 7) + 1,
      // 2nd 2 digits make up the eyes, 11 variations:
      eyeChoice: (dnaStr.substring(2, 4) % 11) + 1,
      // 6 variations of shirts:
      shirtChoice: (dnaStr.substring(4, 6) % 6) + 1,
      // last 6 digits control color. Updated using CSS filter: hue-rotate
      // which has 360 degrees:
      skinColorChoice: parseInt((dnaStr.substring(6, 8) / 100) * 360),
      eyeColorChoice: parseInt((dnaStr.substring(8, 10) / 100) * 360),
      clothesColorChoice: parseInt((dnaStr.substring(10, 12) / 100) * 360),
      zombieName: name,
      zombieDescription: 'A Level 1 CryptoZombie'
    }

    return zombieDetails
  }
}
