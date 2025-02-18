import { PokeCard } from "./PokeCard";
import './PokeList.css'

const PokeList = ({ pokemons = Array(10).fill('') }) => {
    return (
        <div className="PokeList">
            {pokemons.map((pokemon, index) => {
                return <PokeCard key={index} />;

            })}
        </div>
    )
}


export { PokeList }
