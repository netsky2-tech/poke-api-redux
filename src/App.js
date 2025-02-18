import './App.css';
import { Col } from "antd"
import { Searcher } from './components/Searcher';
import { PokeList } from './components/PokeList';
import logo from './statics/logo.svg'
import { useEffect } from 'react';
import { getPokemon } from './api';
import { setPokemons} from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const pokemons = useSelector(state=> state.pokemons);
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon();
      dispatch(setPokemons(pokemonRes))
    }
    fetchPokemons();
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokedux"></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokeList pokemons={pokemons}></PokeList>
    </div>
  );
}


export default App;
