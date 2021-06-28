import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  render() {
    const {heads, tails, total, imageUrl} = this.state
    return (
      <div className="page-container">
        <div className="game-card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-image" />
          <button
            className="btn"
            onClick={this.onClickTossButton}
            type="button"
          >
            Toss Coin
          </button>
          <div className="counter-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
