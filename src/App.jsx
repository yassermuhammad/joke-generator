import { useState } from 'react'
import Joke from './Joke/Joke';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <PrimeReactProvider>
    <div className="App">
        <h1>Joke Generator Using React and Joke API</h1>
        <Joke/>
    </div>
    </PrimeReactProvider>
);
}

export default App
