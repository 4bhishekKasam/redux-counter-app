import React, { Component } from "react";
import Main from "./component/Main";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/index";
import { Provider } from "react-redux";
import "./App.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    console.log("State -", store.getState());
    return (
      <Provider store={store} className="App">
        <Main />
      </Provider>
    );
  }
}

export default App;
