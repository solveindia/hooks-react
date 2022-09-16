
import { createContext } from 'react';
import { useState, useContext } from 'react';
import './App.css';
import First from './components/First';
import './index.css'

function App() {
  const [data, setData] = useState('Hello There, I am the last block');
  const [data2, setData2] = useState('I am different')
  const ContextData = createContext({data, data2, fun:setData});
  const passingData = useContext(ContextData)
  return (
    <First data={passingData} />
  );
}

export default App;
