// Fichero src/components/App.js
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import callToApi from "../services/api";
import hp from "../images/azul_1.jpg";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFiterCharacter] = useState("");
  const [filterHouse, setFilterHouse] = useState("");

  useEffect(() => {
    callToApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilter = (data) => {
    setFiterCharacter(data);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterCharacter.toLowerCase());
  });

  return (
    <>
      <header>
        <img src={hp} alt="Harry Potter Logo" />
      </header>
      <main>
        <Filters
          handleFilter={handleFilter}
          filterCharacter={filterCharacter}
        />
        <CharacterList characters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
