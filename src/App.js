import { useState } from 'react'

import './App.css'
import { Home } from './components/Home'
import { Dice } from './components/Dice';


function App() {
  const [isGameS, setIsGameS] = useState(false);
  const toggleGamePlay = () => {
    setIsGameS((prev) => !prev);
  }
  return (
    <>{isGameS ? <Dice /> : <Home toggle={toggleGamePlay} />}
    </>
  );
}

export default App
