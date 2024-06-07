import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const {count} = this.state
    if (count < 100) {
      const randomNumber = this.getRandomNumber()
      this.setState(prevState => ({count: prevState.count + randomNumber}))
    }
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="main-container">
          <h1 className="main-heading">
            Count <span className="main-heading">{count}</span>
          </h1>
          <p className="paragraph">Count is {displayText}</p>
          <button className="button" onClick={this.onIncrement} type="button">
            Increment
          </button>
          <p className="sub-paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
