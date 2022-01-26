// Fichero src/components/App.js
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import hp from "../images/azul_1.jpg";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");
  const [filterHouse, setFilterHouse] = useState("gryffindor");

  useEffect(() => {
    callToApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, [filterHouse]);

  // Filter handler function
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterCharacter(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };

  // Filter characters function

  const filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(filterCharacter.toLowerCase());
    })
    .filter((character) => {
      return character.house === filterHouse;
    });

  // Render Character Detail function

  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.characterId;

    const foundCharacter = characters.find(
      (character) => character.id === routeId
    );
    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <>
      <header>
        <img src={hp} alt="Harry Potter Logo" />
      </header>

      <main>
        <Switch>
          <Route path="/" exact>
            <Filters
              handleFilter={handleFilter}
              filterCharacter={filterCharacter}
              filterHouse={filterHouse}
            />
            <CharacterList characters={filteredCharacters} />
          </Route>

          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          ></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
