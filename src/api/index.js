import axios from "axios";

const getPokemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results)
    .catch((err => console.error(err)))
}

const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
    .then(res => res.data)
    .catch((err => console.error(err)))
}
export { getPokemon, getPokemonDetails }