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
    zombieName: '',
    zombieId: ''
  }

  componentDidMount() {
    this.cryptoZombie = new CryptoZombie()

    this.cryptoZombie.listenToNewZombie(function(data) {
      const { name, dna, zombieId } = data
      console.log(`New zombie "${name}" created with DNA "${dna}"`)
    })
  }

  onCreateZombieFormSubmit = e => {
    e.preventDefault()
    this.cryptoZombie.createRandomZombie(this.state.zombieName)
  }

  onFindZombieOwnerFormSubmit = e => {
    e.preventDefault()
    this.cryptoZombie.getOwnerByZombieId(this.state.zombieId)
  }

  onInputChanged = name => e => {
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <Layout>
        <Container>
          <form onSubmit={this.onCreateZombieFormSubmit}>
            <label>
              Zombie name
              <input
                type="text"
                value={this.state.zombieName}
                onChange={this.onInputChanged('zombieName')}
              />
            </label>
            <button onClick={this.onCreateZombieFormSubmit}>Create</button>
          </form>

          <form onSubmit={this.onFindZombieOwnerFormSubmit}>
            <label>
              Zombie ID
              <input
                type="text"
                value={this.state.zombieId}
                onChange={this.onInputChanged('zombieId')}
              />
            </label>
            <button onClick={this.onFindZombieOwnerFormSubmit}>Submit</button>
          </form>
        </Container>
      </Layout>
    )
  }
}

export default HomePage
