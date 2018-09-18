import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '@common/components/Layout'
import CryptoZombie from '../cryptoZombie'

const Container = styled.div`
  display: flex;
  height: calc(100vh - 48px);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

class Zombie extends Component {
  render() {
    const {
      clothesColorChoice,
      eyeChoice,
      eyeColorChoice,
      headChoice,
      shirtChoice,
      skinColorChoice,
      zombieName
    } = this.props.data

    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            width: '28vh',
            position: 'absolute',
            left: '13vh',
            top: '-4vh'
          }}
          src={`https://cryptozombies.io/course/static/img/head-${headChoice}@2x.png`}
        />
        <img
          style={{
            width: '13vh',
            position: 'absolute',
            left: '23vh',
            top: '8vh'
          }}
          src={`https://cryptozombies.io/course/static/img/eyes-${eyeChoice}@2x.png`}
        />
        <img
          style={{
            width: '13vh',
            position: 'absolute',
            left: '15.6vh',
            top: '13vh'
          }}
          src={`https://cryptozombies.io/course/static/img/shirt-${shirtChoice}@2x.png`}
        />
        <img
          style={{
            width: '6vh',
            position: 'absolute',
            left: '26.6vh',
            top: '15vh'
          }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfUAAAGRCAMAAABL89pvAAAAnFBMVEVHcEwCAwMCAwMCAwMCAwMCAwMCAwMCAwMCAwMCAwMCAwMCAwMCAwMCAwMCAwN7KitVHx3KbW7t6LKIR0YCAgKrpoAICAoTDxGemn4dEhMpGBo1GxxdWlEoKSpJIiJAHh1cJSVtJyg4MDIcHh9UMzdNTEaeVFV7eWaOT1FraVuNinK9ZWZAPzzY06WuXV6wq4trOz3EvpdxREl+R0kBtb4VAAAADnRSTlMAcOFgphfwQMGA0pFRMNrYfZ4AABXTSURBVHja7Z3netpMEIVtwDbFFvkwWXXRjcEQt/u/t4/iWCtt0aqBw5z3ZyJIHo5m5szsrnR1BQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXd3vuO9+02n+J/6x5uOgGP9a/y83dXbPT6e1kbVj52X2stbsP7nET/Bta7+K53e5aVdLd3wH30P8Hqt3cJe2GVS+3+3pw94Cf+/wFey+3dVpud8F/f4ff/hw8NDu1R7eWRrt3jbx/wgC/bnWtH8Jtu9dE3Nce4T9H8ETctxD2NYV4p3Vr/WBYt3UPlapVvG39dIaHjN9qwuVX0pdd/+wYF2t9q4NSXy7Iew3rn6QN5Qty/48FuaD8NbI9Mcn/ZvsmzL1xh1aJ5OGORXBkE9rnUr7bQ7I3sW+lajkLN8HScQZpgsRF9g5vjz/awd0RYRAEzoFVECzCWeK7Pd93XYaQr96/tUoF1mygIlbd/pWGux2Ez70u4r/1+/3+pOD/DMIraZa17KFS9c13Y+2lRffjzy8kn4wzgb1Tnbt45jhBEExD0+hvdCC8mNo75ds0plQ9jPN0WnU3/vyr5JNcsE/6E07iuIw4y8XMLNf3IHxS89u8BXwRhMKfKlWfqWM9FtKWffI1/vaoH1mqi7frDVcLfE9lABDxXG7PozmbBs5WsGh61eNLRinROSE30o/G8nl9zvgtNRfuHUC/P458ua1vQvC9h+vmUHwVp2FH+GtHIXocsMORuqyvpZ+dxv/4RFtM4gvd/pGx0tWTD/gbY98erpKF11z1dXxJOsHbWZlixfVuWuMXpx72pfpI08fTDvh7s+TONutt+mcWVV9lNm5M3beFWXnC4mr1u/bW+lLdh7UrEeg7yWV6iKoHmRY+3a6Psm8Z0x6R+++Mj6q7WV08zbndnUm3Nlsr5HCMG3amtPCevm9L3jI6L5e4PQxVt6wGwelNxyi5bwbGqs8yk7Sv7NZZ9lwv41q+xztgMsC5JdbKmdo421x1hSFbxhY+Upb16SDbCupvxFmqdetzHwilkX7cJkTJ0T8Y92vv5qq/6+exgpmLsss6nyn0xSBUq+4MBuuNGPr7un7f69LR/c58MKPSY2UZtm620sz52WVdYufszLGvRPWBRPjOV9ZrtmgY+maOYdzUvOBKb5B3SzmFdw3megNhyL7I+v+4ctUHg+0y8WUtrt5B9BRbY9UX+pwgTOaYwXodN3TTpwUD1fd1iSvxbVJGzsDHMTtrVCpTPcxQTT2jCQYDUxNvD8qozl/XgOiJH9bn5ycb40Za1lJtLZMZzVqt+tIswRurzrlQiB7jRsnsy8zHJ+9a0Xz1jGarVt0xS/BcJWFQPa/obiQ4rbWx6o4uwQvdups9FEi6QdP5AVTPN5BzI0lXtTEekAe6BM/UC25TjeoDswQP1Qu696E9MtzGmBSDadTjHLxXyMzx+yW0DiC/6rcQXai7rn61g5uZ2Zr0y/UCkXoyt9apHppt2DFVPaDWuT3oJnIahz3V/shDjStbahL8KHvqK6oeQvW8Cy460YX8y7l4mcXmBrIjpZ17Z2oHzzuHgbHqgYHq+s5tQUv1G82CCxsJovMpfqU/2aASJeBLsvD9nsH5CWFM4xhcplc9lE1kSfZs4pGUZN219RtkbGkCXiaOt7ka1UNz1Vfb6lTv0O7Z3F9SbF2I2Zw3l6yibFfJI41Cs85//cJc9f1pOKeU6hYl1e9Mvbu08G40fbjPX3j8gV+F1WxXd1NpGzf+/Mu38oulo17GF1Za13LVL3/fnMbJqUTnG2rBzzmJlbTEEMVZSE4u61PJbKfi1qxz48pOGKy4A7TCrgpXelc5lFRvFxCdz9yBOgCTQ/uZ8T9ii4feN99nmb9PNE/DzLWi8ICwb06u+prQaK5TRHTez7GtboNM1nZUN+OeqpaxTvWAzmjuoZDoiXBcqPYwusmBi7lb9OpSva9TfUqmXVd36nrRE2o68m1NQz/lAIz/kVFNotta1eP/ee/CVe+ZD+TU8zn2Kt8pmZWtXZNMUiUj4cRTKLXw10SbNjdLdL4n42TnB61u2gGolm61tqFKJjrV6Vj4Rp6JnDrYLfbV9255nz7SWTOd5vscn+vpQu4kMskOX32bQvUVFQuv8u/MQPSU5drsF8ecmezOkXy/F+X8en253sfwJMp6DpU9EVW3ZbOc7mVbOWX9M1H9V+pHnqUeCDZSxa3tG339r8g1jfS/ao4jX/0Ze9zvi08tkHWcl7320i5m342c9pAvEt637sw1/PJfvyb7+PWzAph5sZhHJuOR5PlzzJ/0Zaq/SjbhXbSZaxZ2chJDlzFoHfmHZwf+Mmccqxj5vuu6qSh2Xdf3x5O+ksl4/8EjUfLW4FRngVjWL/lBs6r5OzNXxs2/bmNMv04Smf+4RDujMZnrlCrqGbK7ZUWf1Kq6LSzRri0SZV1h5YZeLnHcmkQf1yp6X2tJLvl5RK3inXpmbS8tes2hnngWpcAFn2JVTeWivPqI85Sc6eIMod7va4Z/l5zg2wXH77JwZ5nbK3+UldujWRS6JxfqrJhInO62X17zuvO79ilUl3yIuVHev6eEPz7N/1cl1C76mGSoN2uy3tVQf6h7JKt6w2Sedi5qt3KaN0d0b6iFegXe+x8JdeUouX1DLtQZmVBPNh3t3ldD07ro50U3q7ZylVK76Olmnchb/RqVTOX+2VBPTeGJPKFA3qsPyYT6mI5rzxzL2VSsXLptu6cc6hGVUE+1bUQSfIv2gCa9ykojwd8QD/X0KwFoJPgO8VBPj+BpJPhb4qHuUUzwTeIGPp3gaby+rUu7Vxc20ZB41cMD9VBPbaeg8ThBads29MmEenqN9ZqC6PKTD2QW28Qt0XTf5fNT1tVPIHr6+EOXRILvkt5CIyb4HgXRH4hPaIQET2JpvVfNwYd/NtTTCZ7Gq5xuibdtE4vgYO6+njPH/46XG1kEV15aP9jLTc6Q4EmsvNz8ZC/XR4I/oZf7ISP48TkSPImVl4bpCz4uNNSFI403ZBP8wcXbnjcaXXyopxN8l2yC/0rzeyxmu94oulwvl15k7ZBN8BLxz6H9WRL8A+kEL1N/p70/uqxQT++iuSWe4NUPbtyFfUXCjnxvdF7VxxT7toZVhGPUl0340XGL4pB55/NywvHlJhJ8RrW3SgU9vy3VHZ0rwdsE+7ZOyQfq74O+mPLpGLNHZ/FyJPu2bvk3KeyDPr/ytvg1Kd1Pk+BJ9m3pBu2b3MrnivmR/Evs6NShLjyAiELfdq9UPb/8+0sNH/PuKe8d98ShTrJva2eKnlf8IfNGubO77DGWp/FyJPu2W2PVzbUfDvVvdoiyXuPgnzDBU1xve7Byqm4e9krhDV7Fty/vJ0rwFNfbekVEN9Ze+uxY38gaeidK8OmyTmKfZKOE6ibSDwXh06KzhfQ13EM2PktZJ7ER3iqruoHyiVSfFj10fu9YyV7G7Z9jIzyFfZLNSlTPVv573JoSnQW/v1hKdD9FuFMs6+2qRM9Sfnh8K2NK9Nnyd0xga16leaqyTmIcK+3bos/523w0cl1WpfLDoe37suwes2Ca1y+eZghPYRx7I03wjzEf8/nId1klygt/vvmdxtlo3qF6kiH8HQHVOzLV2aPI2zwauXalXZ0V/Jawnp1Wdo/g8QdpWfcelXzMR5555Ovnb8vfclbp8u6ecG29Tbasvz1m8LnXvqTwStElab5OJ4+y/iXUoxk7w2cU9nLVZ8FvNakuzt+/SXs0npxgRkOsrMcq2Y85MJNePq0NHLXui8Qa3Nf7wezRpO4ZDdWybvmPeXmb+3YB4Yds4ajDXb4W601qNXMo6znJDnrZguxmrazuM8WUb1yjmSO7ecp6LM5b5LE8wu//YLo2SfJ16U6wrF+XLuv5lZeoqNB9qZnqj2sycyjrpZR3cwkv1X2pXc2Z1GHmUNbLMvdZHt1FXxfoJ3uVLMP6KOuly7owyYs8Y+EFP79iWUftKliPc+mV9XvTIXwJPufKKi/4+YWRl6t0+Z3RK+utnEP4wlVelevTW+Xs73mdMzXbhF2yvE8IlvWuTPX5Yx2YCf+9y0Ls1WdL6eY6i40qtPAkyjrLWFuvlo8RM0n0ezsviG4vlZttSoX7iOCjBU9Q1o0iXrB1adHjgi/dVBlVZeEpbJmTzmjcx3p5k5q71LxuqN5bV+3mOpfeljmpmYsea2fu5dqAIWyzkujuVTKFJ7ETXnr+4ePxBHxGtqnubCVZlxE3VUZVTOFJPFCS1TyjyZ3pZXsv5DtuhMaOTSpo3Ei86eXkZi49v7EzdQ8dw902xYJ9TO/c+vWJZjT5Aj4pumaT1e8gkeYLte0RvXPrMjNnRY+n5TNiOju/0MnuhGVtvE9vRtM96YxGY+lddV0fztbacC+Z4X1ySy/SZVbrDKo/PT0rh+5Di+nCfV1y87RL78XbZzZzB73/vPx34GWuXlYNNTsq46smpVUnMaO5P8dkLhb8z1/Bv3j5UD6fyFael+BOS5RfZ6X20o+TTuZEwf+i0n043ChUnxY4FDXeIxvSkJjRtM8wmXt+UgieoTubybP8LO9INvqb091okladxMsaT23mdor/l41Sd2mWz9m4je3E/qvJhJ6ZYyc0c2aK63UPtGbOxMKnH3LHfHL7aKQW3q2njr/8lwuF7lPxyHMuCx9J+kJqC27NurbCp4I8p+Jfusv6uKFQ3OMNlcwgvWdsuSVh5nr175nLHeRcHyfr34fp4j7LY+HdjH2XJMxcu+Z5bI5KLtddNq9jyeL+fWcM/QL5neBZp3otfFnJD/yRPUt8IZ/HRvkGMhJomLn6LHwlkh/4tLWeLshh4cdZoU7CzNVl4auT/ICkvMcH4vLMY70s1UmYOdkU3hqV1by4fVOm+VBt5fOYOe7uWQ7eA0bTzHWqt/BPlUsuT/PfsueYzHEJPhzs2E5JmrmqLfzzn//q4mWePg533GqxzGHmOAe/HhxYEXx6rHQjjfXTwvwvT25K9kPjvskxmYtnr2zwxZLenjlp48Z+TDUXXZ1kMWaWYzLnJhO8KDuJPXPVWfgaU7s63PeyO3lOvsSfDr5VH2yonWu8qmhX9PPLf6ciGe6MLQzK+vjIRK761iY2pLmvZCPN0+k0F8Odacr6OPI9l/H3iEz1wRqPHBtabz9Zc9HMx/vqEoKPXFv7dHJO9UFIK9hbpRu3Qpq/lHEBT59zT67633ls5NvZz6TnVXdoBXvZxq2A5k/zY4a2p58FFD8IzjRPo5pErmVCQnU+2An0bo1SjVsBzZ89bgeLPc+Z2W2N4kKV1xMOVMF++Sdab0s0bgV8+0t6mm4/5xjJGiuaX3VawS5r173aerVnZgln2IzD/dmqFHtANthvCh9nLeLGPqRHG6aGacKuVnVroAz2S5/P3RdccXv6ryrRjWX/qFh0a5tUfUnnqQXXhRq3gvtdlS9dNpI9rFp1JxXsNpmdFa0ijVuxVvuJqd+1/WHw+YJWjoWLwHHe97Km/maZUn1FZlLTzt+4PRWcp+nKMjO4kQr4tc3K4dO4tmEfDLaMip/r5lW98CqL/iHAXj7VWbgJlg4v6dZJPlp6tlin6vZgkHps0TT99wsqWybztutPRaeoybYrXL+nXtD3nEP19ftAgsM/mk56Raht2AeD9/jvGhetOsvVrpdYTk0MzleHH/mVz/l2DtWlkvKqz6QXpFW3dBdc9J7JXO164UBPhfpf87zlU+6nuepOluqWmerC3cM1b9fU9lTMK7XuYqjH3vmVSzWhuYdfZ6ruGKkuXsVIuPg783a91CL6H4V1XnH/vPmNE2SqHhipLl61IbFB2nxIU25T3FxVc0NzPxeqzbewH2ZmpLr4PSsSvVvHdEhTcreMrUqrjvkqzDxD00BbsmWq22kPv6Gxt6Jl1q6X3Qr5qW6XZsYt+0eGWQvELiFD9eQkfhtQeb6kbDRnV+ndhQmNZgyaNdHNMGsJ0WZGqq95zRmZF7p1TYY05fe5M/HAybeNj/8HT8atm9SsLaysFC+ovpDm9ouv6w2DIU150T8lv7OkWXozNvHT7Ehemaj+lRFkr4y75P00soFsVKmPSyX4V40UU2M7x7JVtyVXiNruMsL7SrYsdNFnHJmkcZsmfFwV29eZTou4HLvmdu5VouksawQjUX2xki8KXfbOuaw3MVci+pMuwfNttvmoZ5UdyRsT1eXcXvimiowhzVMVovMjGkmMvpvPaWz1cplE021R1dsXvlnyQa96NaL/5+rrsWVs56a6jv3Vypq3vhpp3rj4Q6132tFcRaK/aLMu58Iyt899WJoFGCdj57PkClly71z+EYhr3WiuItF5rZYy1TfG07k/OoOwFBRc5ladguZ61asSnc/L24yZmvk439aP5qTXBLLzzOQ0l4/h3YpF56SaZa2QvpTwhZvMrc/x8M6VPFW0S+I5c3rVqxP9T9aq96u5iX/WpPhQe6Zpu15w/bw3SU1mWOvhigxtlerPlYnOl3X5DhfOxH+UmPfIkvahsr86wVR/WKp7fXN1RVr1w2MlKxSdz8py0Tm95jk8QirFb+UnIGbZDq5HSnLF4su0mtm7ZM0kHGRtYsw8+aRex3GsQlDK7BrV9ztkK33MTFZZHwymOc5CKNdsuR14U1PJu82bK4LcSnfIVvrcuCcrY2sr31F5edrApeLWcf+YDdt7D1c0kaluMeZ63nT+9vFUsZnbZqqe2bDzLp4FK2fHMgg2YeI8xTz7oPtt6/6KLDLVh4mHuzBm2zNvOp1/PD8/lTNztkJ0viTn2ndZFNKSK5bcZG+94v6U2bZtT3fMP5+fDe6EbDOXT/W3spp3aUsuV11xxFw4cZ64ktnunun8wNvzFy8GZxf0qv/5+qbjF3s7ZqUkb3SugLHqetGPNYEdK4Py4QJLlercCrt3gMkfKMa+/pGiib3dhOJy1Q1/waE1zP2ryydz785qkbx3Kn282LfiCHK16laN8Kq/Os46CKahbdVPo0WzLf8Zqp8DKG6g+kUp3u7dQ3G96pcW4td3UFfBw0UK3rlDiOu4uyzBuxCclOqNdqf5AD3JqN7d6Y0STkb1RrvXuUN8U1G93e5cQ+4SXP9Tsd3aqY1kTkH12/Yuke/EhjWvjpteq91uNG7ZT8vh7U6nc4fAPkGNv7u+bh1vglPfBbfdo857oRHUZ04E+/vgure/E473wp6StXlPt9tu9b40hsr/Xna4v9Zwf/cF7DYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4GT8D/orHHYHN+VXAAAAAElFTkSuQmCC"
        />
        <p>{zombieName}</p>
      </div>
    )
  }
}

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

          <div style={{ width: '100%' }}>
            {this.state.zombies.map(zombie => {
              const generatedZombie = this.cryptoZombie.generateZombie(zombie)

              return <Zombie key={zombie.dna} data={generatedZombie} />
            })}
          </div>
        </Container>
      </Layout>
    )
  }
}

export default HomePage
