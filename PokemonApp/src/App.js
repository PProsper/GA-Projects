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
        }).done((response) => {
            let pokemon = response.objects;
            //binds variable pokemon to state pokemon not sure which is which...
            this.setState({ pokemon: pokemon });
            console.log(response);
            //response is slow possible beacuse of limit amount
        });
    }

    //Another api call needs to be made using index
    // it is setting a 'currentPokemon' property in state
    // ui is added to render that currentPokemon details

    selectPokemon(index) {
        this.setState({ currentPokemon: this.state.pokemon[index] });
    }


    render() {
        // onClick takes a function and when the element that onClick is
        // bound to, that function is called.

        let pokeList = this.state.pokemon.map((Pokemon, i) => {
                return ( < li key = { i }
                    onClick = {
                        () => { this.selectPokemon(i) } } > { Pokemon.name } < /li>);
                });



            let pokeName
            let pokeWeight
            if (this.state.currentPokemon) {
                pokeName = 'Name: ' + this.state.currentPokemon.name;
                pokeWeight = 'Weight: ' + this.state.currentPokemon.weight;
            } else {
                pokeName = "Select a Pokemon";
            }

            return ( < div className = "App" >
                < h1 > Make Your Own Pokemon < /h1> < div className = "list-container" >
                < ul className = "list" > { pokeList } < /ul> < /div> < hr / >
                < div className = "details" > { pokeName } < div className = "weight" > { pokeWeight } < /div> < /div> < /div>
            );
        }
    }


    export default App;
