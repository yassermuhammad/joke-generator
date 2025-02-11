import { useState } from 'react'
import "./Joke.css";
import Button from '../Button/Button';

function Joke(props) {
  const [joke, setJoke] = useState("");
  const fetchJoke = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  };
  return (
    <div className="joke">
        <Button callApi={fetchJoke} /> 
        <p>{joke}</p>
    </div>
);

};

export default Joke;
