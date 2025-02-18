import './App.css';
import { Col } from "antd"
import { Searcher } from './components/Searcher';
import { PokeCard } from './components/PokeCard';
import { PokeList } from './components/PokeList';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <Col></Col>
      <PokeList ></PokeList>
    </div>
  );
}

export default App;
