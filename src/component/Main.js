import React, { Component } from "react";
import { connect } from "react-redux";
import { inc, dec, res } from "../actions/testAction";

class Main extends Component {
  increment = () => {
    console.log("Increment Works");
    // this.props.dispatch({
    //   type: "INCREMENT"
    // });
    this.props.inc();
  };

  decrement = () => {
    console.log("Decrement Works");
    // this.props.dispatch({
    //   type: "DECREMENT"
    // });
    this.props.dec();
  };

  reset = () => {
    console.log("reset Works");
    this.props.res();
  };

  render() {
    console.log("PROPS - ", this.props);
    const { count } = this.props;

    return (
      <div>
        <h3>State: {count}</h3>
        <button onClick={this.increment}>INCREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.testReducer.count
});

export default connect(
  mapStateToProps,
  { inc, dec, res }
)(Main);
