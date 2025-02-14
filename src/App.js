import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cow", "cat", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
  const [animals, setanimals] = useState([]);
  const handleClick = () => {
    setanimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button className="btn" onClick={handleClick}>
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}
export default App;
