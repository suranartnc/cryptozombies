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
    zombieId: '',
    zombies: []
  }

  componentDidMount() {
    this.cryptoZombie = new CryptoZombie()

    setTimeout(async () => {
      const zombies = await this.cryptoZombie.getZombiesByOwner()
      const zombieDetails = await Promise.all(
        zombies.map(
          async zombieId => await this.cryptoZombie.getZombieDetails(zombieId)
        )
      )

      this.setState({
        zombies: zombieDetails
      })
    }, 3000)

    this.cryptoZombie.listenToNewZombie(data => {
      const { name, dna, zombieId } = data
      console.log(`New zombie "${name}" created with DNA "${dna}"`)

      const zombieDetail = this.cryptoZombie.generateZombie(zombieId, name, dna)
      console.log(zombieDetail)
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

          <div>
            {this.state.zombies.map(zombie => {
              const zombieDetail = this.cryptoZombie.generateZombie(zombie)
              console.log('zombieDetail', zombieDetail)
              return <p key={zombie.dna}>{zombie.name}</p>
            })}
          </div>
        </Container>
      </Layout>
    )
  }
}

export default HomePage
