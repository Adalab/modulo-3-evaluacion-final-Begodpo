// Fichero src/components/App.js
import { useState, useEffect } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import callToApi from "../services/api";
import hp from "../images/azul_1.jpg";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");
  const [filterHouse, setFilterHouse] = useState("");

  useEffect(() => {
    callToApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterCharacter(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(filterCharacter.toLowerCase());
    })
    .filter((character) => {
      return character.house === filterHouse;
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
          filterHouse={filterHouse}
        />
        <CharacterList characters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
