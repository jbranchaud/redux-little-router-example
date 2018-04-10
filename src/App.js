import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Fragment, Link } from 'redux-little-router';
import logo from './logo.svg';
import './App.css';
import store from './store';

const ConnectedChildren = ({ children, router }) => {
  return (
    <React.Fragment>
      {children(router)}
    </React.Fragment>
  );
};

const FragmentWithRouter = ({ forRoute, children }) => {
  const mapStateToProps = state => ({ router: state.router });
  const Child = connect(mapStateToProps)(ConnectedChildren);
  return (
    <Fragment forRoute={forRoute}>
      <Child children={children} />
    </Fragment>
  );
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FragmentWithRouter forRoute="/one">
            {router => {
              console.log(router);
              router.result.randoFunction();
              return <p>This is for ONE!</p>;
            }}
          </FragmentWithRouter>
          <Fragment forRoute="/two">
            <p>This is for TWO!</p>
          </Fragment>
          <Fragment forRoute="/three">
            <p>This is for THREE!</p>
          </Fragment>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <ul>
            <li>
              <Link href="/one">One</Link>
            </li>
            <li>
              <Link href="/two">Two</Link>
            </li>
            <li>
              <Link href="/three">Three</Link>
            </li>
          </ul>
        </div>
      </Provider>
    );
  }
}

export default App;
