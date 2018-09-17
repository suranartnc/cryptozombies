import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Web3 from 'web3'

import Layout from '@common/components/Layout'
import ZombieFactoryABI from '../abi/ZombieFactory'
import DummyABI from '../abi/Dummy'

const Container = styled.div`
  display: flex;
  height: calc(100vh - 48px);
  justify-content: center;
  align-items: center;
`

class HomePage extends Component {
  // static propTypes = {
  //   firebase: PropTypes.object.isRequired
  // }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.greet('Hi!')
    })
  }

  async greet(message) {
    // Ganache WebSocket
    const web3 = new Web3(
      new Web3.providers.WebsocketProvider('ws://localhost:7545')
    )

    // Metamask
    // const web3 = new Web3(window.web3.currentProvider)

    let accounts = await web3.eth.getAccounts()
    console.log('accounts', accounts)

    const DummyAddress = '0xb3cc651d051533f51af82d74799dfe1969351a9a'
    const DummyContract = new web3.eth.Contract(DummyABI, DummyAddress)

    const result = await DummyContract.methods.greet(message).call({})
    console.log('result', result)
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
