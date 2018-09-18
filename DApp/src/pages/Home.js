import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '@common/components/Layout'
import CryptoZombie from '../cryptoZombie'

const Container = styled.div`
  display: flex;
  height: calc(100vh - 48px);
  justify-content: center;
  align-items: center;
`

class HomePage extends Component {
  state = {
    zombieName: ''
  }

  componentDidMount() {
    this.cryptoZombie = new CryptoZombie()

    this.cryptoZombie.listenToNewZombie(function(data) {
      const { name, dna, zombieId } = data
      console.log(`New zombie "${name}" created with DNA "${dna}"`)
    })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.cryptoZombie.createRandomZombie(this.state.zombieName)
  }

  onNameChanged = e => {
    this.setState({
      zombieName: e.target.value
    })
  }

  render() {
    return (
      <Layout>
        <Container>
          <form onSubmit={this.onFormSubmit}>
            <input
              type="text"
              value={this.state.zombieName}
              onChange={this.onNameChanged}
            />
            <button onClick={this.onClickCreateZombie}>
              Create random zombie
            </button>
          </form>
        </Container>
      </Layout>
    )
  }
}

export default HomePage
