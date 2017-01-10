import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import ReactDOM from 'react-dom'
import './App.css';

$(document).ready(function() {

class App extends Component {
  constructor(){
    super();


  }

/*  getData(){
    axios.get(' https://tweedr-e87f5.firebaseio.com/')

  }*/
/*  axios.all([
    axios.get('https://tracker-ag.firebaseio.com/groups.json');
    axios.get('https://tweedr-e87f5.firebaseio.com');
  ])*/

  axios({
        method: 'get',
        url: 'https://tracker-ag.firebaseio.com/groups.json',
        params: {
    apiKey: "AIzaSyD6VUbCR8soGjY--JDfS5UrE9tvierUgkE",
    authDomain: "tweedr-e87f5.firebaseapp.com",
    databaseURL: "https://tweedr-e87f5.firebaseio.com",
    storageBucket: "tweedr-e87f5.appspot.com",
    messagingSenderId: "776142242942"
  }
    }).then(function (response) {
        responseHandler(USERS_GET, '', response.data);
    })
    .catch(function (error) {
        console.log("Error during fetching data " + error.message);
    });
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
