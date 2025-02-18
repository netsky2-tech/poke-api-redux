import { PokeCard } from "./PokeCard";
import './PokeList.css'

const PokeList = ({ pokemons }) => {
    return (
        <div className="PokeList">
            {pokemons.map((pokemon, index) => {
                return <PokeCard 
                    name={pokemon.name} 
                    image={pokemon.sprites.front_default} 
                    types={pokemon.types}
                    key={pokemon.name} 
                />;

            })}
        </div>
    )
}


export { PokeList }
