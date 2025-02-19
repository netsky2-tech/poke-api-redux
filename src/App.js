import './App.css';
import { Col, Spin } from "antd"
import { Searcher } from './components/Searcher';
import { PokeList } from './components/PokeList';
import logo from './statics/logo.svg'
import { useEffect } from 'react';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading} from './actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function App() {

  const pokemons = useSelector(state=> state.getIn(['data','pokemons'], shallowEqual)
    ).toJS();
  const loading = useSelector(state => state.getIn(['ui','loading']))
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPokemons = async () => {

      dispatch(setLoading(true));
      const pokemonRes = await getPokemon();

      dispatch(getPokemonsWithDetails(pokemonRes))

      dispatch(setLoading(false))
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
      {loading ? 
      <Col span={12} offset={12}>
        <Spin spinning={true} size='large'></Spin>
      </Col>
      : 
      <PokeList pokemons={pokemons}></PokeList>
      }

    </div>
  );
}


export default App;
