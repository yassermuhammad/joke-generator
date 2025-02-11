import { useState } from "react";
import "./Joke.css";
import Button from "../Button/Button";
import { RadioButton } from "primereact/radiobutton";

function Joke(props) {
  const [joke, setJoke] = useState("");
  const [jokeFlags, setJokeFlags] = useState("racist");
  const jokeOptions = [
    {
      id: "option1",
      name: "NSFW",
      value: "nsfw",
    },
    {
      id: "option2",
      name: "Religious",
      value: "religious",
    },
    {
      id: "option3",
      name: "Political",
      value: "political",
    },
    {
      id: "option4",
      name: "Racist",
      value: "racist",
    },
    {
      id: "option5",
      name: "Sexist",
      value: "sexist",
    },
    {
      id: "option6",
      name: "Explicit",
      value: "explicit",
    },
  ];
  const fetchJoke = () => {
    fetch(`https://v2.jokeapi.dev/joke/Dark?type=single&blacklistFlags=${jokeFlags}`)
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  };
  return (
    <div className="joke">
      <div className="joke-options">
        {jokeOptions.map((option) => (
          <div className="option-container">
            <RadioButton
              inputId={option.id}
              name={option.name}
              value={option.value}
              onChange={(e) => setJokeFlags(e.value)}
              checked={jokeFlags === option.value}
            />
            <h4 htmlFor={option.id} className="ml-2">
              {option.name}
            </h4>
          </div>
        ))}
      </div>
      <Button callApi={fetchJoke} />
      <p>{joke}</p>
    </div>
  );
}

export default Joke;
