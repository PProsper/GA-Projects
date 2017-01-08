import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
  //declare state object with variables
        this.state={
            loc: null,
            icon: null,
            temp: null,
            high: null,
            low: null,
            wind: null,
            des: null,
        }
    }

//declare change method on set.State
changeType(loc){
    this.setState({
      loc: loc
    });
  }

//get back data to plug into DOM
  setWeatherLocation(data){
    this.setState({myLoc: data});
  }

   componentDidMount() {
    // Great to to kick off a method. Called after the render method
    console.log("=====componentDidMount======");
    console.log("this.props: ", this.props);
    console.log("this.state:", this.state);
    axios.get('Get', 'http://api.openweathermap.org/data/2.5/weather?q=11234,us&appid=fa09838a25e6aac6521c99c9737e2034&units=imperial')
    .then((res)=>{
      console.log(res.data);
      this.setWeatherLocation(res.data.weather);
    });
  }

    render() {
        return ( < div className="App" >
            < div className="App-header" >
            < img src={ logo }
            className="App-logo"
            alt="logo" / >
            < h2 > Welcome to React < /h2> < /div> < p className="App-intro" >
            To get started, edit < code > src / App.js < /code> and save to reload. < /p> < /div>
        );
    }
}

export default App;
