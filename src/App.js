import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
      const config = {
    apiKey: 'AIzaSyB2Ki9rFrj8Me-W28CHQJfO-rA13Y5GS1U',
    authDomain: 'manager-56b5f.firebaseapp.com',
    databaseURL: 'https://manager-56b5f.firebaseio.com',
    storageBucket: 'manager-56b5f.appspot.com',
    messagingSenderId: '554465187425'
  };

  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
export default App;
