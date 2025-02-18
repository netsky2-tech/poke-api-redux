import { PokeCard } from "./PokeCard";
import './PokeList.css'

const PokeList = ({ pokemons }) => {
    console.log(pokemons)
    return (
        <div className="PokeList">
            {pokemons.map((pokemon, index) => {
                return <PokeCard name={pokemon.name} key={index} />;

            })}
        </div>
    )
}


export { PokeList }
