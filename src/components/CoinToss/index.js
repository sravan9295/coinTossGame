// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    heads: 0,
    tails: 0,
    isHeads: true,
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        isHeads: true,
        heads: prevState.heads + 1,
        count: prevState.count + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHeads: false,
        tails: prevState.tails + 1,
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {count, heads, tails, isHeads} = this.state
    const tossImage = isHeads ? (
      <img
        className="coin-image"
        src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
        alt="toss result"
      />
    ) : (
      <img
        className="coin-image"
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        alt="toss result"
      />
    )

    return (
      <div className="app-container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {tossImage}
          <button type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p>Total: {count}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
