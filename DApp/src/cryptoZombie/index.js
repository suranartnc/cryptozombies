import Web3 from 'web3'

import zombieFactoryAbi from './abi/zombieFactory'

export default class CryptoZombie {
  constructor(mode = 'local') {
    if (mode !== 'local') {
      this.web3 = new Web3(window.web3.currentProvider)
    } else {
      this.web3 = new Web3(
        new Web3.providers.WebsocketProvider('ws://localhost:7545')
      )
    }

    this.zombieFactoryAddr = '0xfd5cb1270ed8173f06b9063206f07f6cf9e46610'

    this.zombieFactory = new this.web3.eth.Contract(
      zombieFactoryAbi,
      this.zombieFactoryAddr
    )

    this.loadUserAddress().then(account => {
      this.account = account
    })
  }

  async loadUserAddress() {
    const accounts = await this.web3.eth.getAccounts()
    return accounts[0]
  }

  listenToNewZombie(callback) {
    this.zombieFactory.once('NewZombie', function(error, event) {
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

      const result = await this.zombieFactory.methods
        .createRandomZombie(name)
        .send({
          from: this.account,
          gas: '1000000'
        })
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
}
