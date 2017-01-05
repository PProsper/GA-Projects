import React from 'react'
import { getPokemon } from '../xhr'

let pokeProfile = React.createClass({

  getInitialState: function() {
    return {
      name: null,
      abilities: null,
      speed:null,
      weight: null,
    }
  },

  componentDidMount: function() {
    getPokemon(this.props.params.id).then(results => {
      this.setState({
       name: results.data.name,
       abilities: results.data.objects.abilities.name,
       speed: results.data.objects.weight,
       weight: results.data.weight
    })
   })
  },

  render: function() {
    return (
      <div>
        <h3>Pokemon Profile: {this.state.name}</h3>
        <div>: Abilites: {this.state.abilities}</div>
        <div>: Speed: {this.state.speed}</div>
        <div>: Weight: {this.state.weight}</div>
      </div>
    )
  }

})

export default pokeProfile
