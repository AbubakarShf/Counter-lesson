import React, { Component } from "react"

class CounterClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initailData,

    }
  }
  render() {
    return (
      <div>
      {console.log("ClassCounter Is rendered!",this.state.count)}
        <button onClick={() => this.changeCount(+1)}>+</button>
        {/* Good Programming Practice */}
        <span className="counterVal">{this.state.count}</span>

        <button onClick={() => this.changeCount(-1)}> -</button>
      </div>
    )
  }

  changeCount(val) {
    // Good Approach
    this.setState((PrevState) => {
      return {
        count: PrevState.count + val,
      }
    })
  }
}
export default CounterClass
