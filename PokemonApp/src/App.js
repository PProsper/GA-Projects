import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';

class App extends Component {
constructor () {
super ();
this.state = {
  name:'name',
  weight:'weight',
};
/*this.getPokemon = this.getPokemon.bind(this);
this.renderPokeData = this.renderPokeData.bind(this);*/
}


getPokemon() {
  axios.get('https://pokeapi.co/api/v1/pokemon/').then ((response)=> {
  this.renderPokeData(response.data.objects.name, response.data.objects.weight)
  })
   .catch((err) => { console.error(err); });
}


/*renderPokeData(name, weight) {
    this.setState({
      name:
      weight:
    });
  }*/



render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Make Your Pokemon! </h1>
        <p> </p>
        <hr />
      </header>
      <div className="list">
      <h3> Choose Your Pokemon:</h3>
      <p id="name"> {this.state.name} </p>
      </div>

      <div className="userPoke">
      <p id="details"> {this.state.weight} </p>
      </div>
      <footer>
        <hr />
        Data Served From: <a href="https://pokeapi.co">Pokeapi.co</a>
      </footer>
    </div>
  );
}
}
export default App
