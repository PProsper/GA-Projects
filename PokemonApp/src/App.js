import React, { Component } from 'react';
import $ from 'jquery';
import '../css/App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    pokemon: [],
  };
}

componentDidMount() {
  $.ajax({
    url: "https://pokeapi.co/api/v1/pokemon?limit=151&offset=1",
    method: "GET"
  }).done((response)=>{
    let pokemon = response.objects;
    this.setState({pokemon: pokemon});
    console.log(pokemon);
  });
}

  // use the index to make another api call to get more data about the planet
  // do that by looking up the planets id and then adding it to the url
  // i.e. '/plantes/:id'
  //
  // make an api call and set a 'currentPlanet' property in our state
  // add a ui to render that currentPlanets details
  //
  // OR
  //
  // use info in planets array and don't make another call

selectPokemon(index) {
  this.setState({ currentPokemon: this.state.pokemon[index] });
}


render() {
  // onClick takes a function and when the element that onClick is
  // bound to, that function is called.

  let pokeList = this.state.pokemon.map((Pokemon, i) => {
   return(
      <li key={i}onClick={ () => { this.selectPokemon(i) } } >{Pokemon.name}</li>);
 });



 let pokeDetails
  if (this.state.currentPokemon) {
   pokeDetails = this.state.currentPokemon.name;
 } else {
   pokeDetails = "Select a Pokemon";
 }

  return (
    <div className="App">
      <div className="planets-list-container">
        <ul className="planets-list">
        {pokeList}
        </ul>
      </div>
      <div className="planet-container">
        {pokeDetails}
      </div>
    </div>
  );
}
}


export default App;
