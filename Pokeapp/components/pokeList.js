import React from 'react'
import main from './main'
import { getPokemon } from '../xhr'

let pokeList = React.createClass({

  getInitialState: function() {
    return {
      pokeList: []
    }
  },

  componentDidMount: function() {
    getPokes().then(results => {
      this.setState({
        pokeList: results.data.name
      })
    })
  },

  render: function() {
    return (
      <div>
        <h3> Choose Your Pokemon:</h3>
        {this.state.pokeList.map(main => {
          return <Poke Name={main.name} id={object.pkdx_id} key={main.name} />
        })}
      </div>
    )
  }
})

export default pokeList
