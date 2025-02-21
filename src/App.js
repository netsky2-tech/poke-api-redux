import './App.css';
import { Col, Spin } from "antd"
import { Searcher } from './components/Searcher';
import { PokeList } from './components/PokeList';
import logo from './statics/logo.svg'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonWithDetails } from './slices/dataSlice';

function App() {

  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  const loading = useSelector((state) => state.ui.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonWithDetails())
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
