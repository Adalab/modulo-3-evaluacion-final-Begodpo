// Fichero src/components/App.js
import "../styles/App.scss";
import "../styles/componentes/Header.scss";
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
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [filterGender, setFilterGender] = useState("male");

  useEffect(() => {
    callToApi(filterHouse).then((charactersData) => {
      setCharacters(charactersData);
    });
  }, [filterHouse]);

  // Filter handler function
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterCharacter(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    } else if (data.key === "gender") {
      setFilterGender(data.value);
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
    })
    .filter((character) => {
      return character.gender.toLowerCase() === filterGender.toLowerCase();
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
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
      </header>

      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Filters
              handleFilter={handleFilter}
              filterCharacter={filterCharacter}
              filterHouse={filterHouse}
              filterGender={filterGender}
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
