import React, { Component } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'

import Layout from '@common/components/Layout'
import ZombieFactoryABI from '../abi/ZombieFactory'

const Container = styled.div`
  display: flex;
  height: calc(100vh - 48px);
  justify-content: center;
  align-items: center;
`

class HomePage extends Component {
  account = ''
  ZombieFactoryContract = null

  componentDidMount() {
    window.addEventListener('load', () => {
      this.ZombieFactoryContract = this.initializeContract().then(() => {
        this.ZombieFactoryContract.once('NewZombie', function(error, event) {
          if (error) return
          console.log('New Zombie Created: ', event.returnValues)
        })

        this.createRandomZombie('Tae')
      })
    })
  }

  async initializeContract() {
    // Ganache WebSocket
    const web3 = new Web3(
      new Web3.providers.WebsocketProvider('ws://localhost:7545')
    )

    // Metamask
    // const web3 = new Web3(window.web3.currentProvider)

    let accounts = await web3.eth.getAccounts()

    const ZombieFactoryAddress = '0xfd5cb1270ed8173f06b9063206f07f6cf9e46610'
    const ZombieFactoryContract = new web3.eth.Contract(
      ZombieFactoryABI,
      ZombieFactoryAddress
    )

    this.ZombieFactoryContract = ZombieFactoryContract
    this.account = accounts[4]
  }

  async createRandomZombie(name) {
    return this.ZombieFactoryContract.methods
      .createRandomZombie(name)
      .send({
        from: this.account,
        gas: '1000000'
      })
      .on('receipt', function(receipt) {
        console.log(receipt)
      })
      .on('error', console.error)
  }

  render() {
    return (
      <Layout>
        <Container>Homepage</Container>
      </Layout>
    )
  }
}

export default HomePage
