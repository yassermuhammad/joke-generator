import { useState } from 'react'
import Joke from './Joke/Joke';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>Joke Generator Using React and Joke API</h1>
        <Joke/>
    </div>
);
}

export default App
