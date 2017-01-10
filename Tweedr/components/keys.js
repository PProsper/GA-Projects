import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  fetchData() {
  axios({
        method: 'get',
        url: 'https://tracker-ag.firebaseio.com/groups.json',
        params: {
    apiKey: "AIzaSyD6VUbCR8soGjY--JDfS5UrE9tvierUgkE",
    authDomain: "tweedr-e87f5.firebaseapp.com",
    databaseURL: "https://tweedr-e87f5.firebaseio.com",
    storageBucket: "tweedr-e87f5.appspot.com",
    messagingSenderId: "776142242942"
  };
    }).then(firebase.initializeApp(config));
      .catch((err) => { console.error(err); });
    });
}
