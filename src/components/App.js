// Fichero src/components/App.js
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import callToApi from "../services/api";
import hp from "../images/azul_1.jpg";
import CharacterList from "./CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    callToApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  return (
    <>
      <header>
        <img src={hp} alt="Harry Potter Logo" />
      </header>
      <main>
        <section>
          <form action="">
            <label htmlFor="name">Busca por personaje: </label>
            <input type="text" />
            <label htmlFor="house">Selecciona la casa: </label>
            <select name="house" id="house">
              <option value="Gryffindor">Gryffindor</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Slytherin">Slytherin</option>
            </select>
          </form>
        </section>
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

export default App;
