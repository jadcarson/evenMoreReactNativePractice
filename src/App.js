import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
export default App;
