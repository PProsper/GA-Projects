import axios from 'axios'

let getPokemon = function() {
  return axios.get('https://pokeapi.co/api/v1/pokemon/')
}

let getPokes = function(id) {
  return axios.get('https://pokeapi.co/api/v1/pokemon/' + pkdx_id)
}

export { getPokemon, getPokes }
