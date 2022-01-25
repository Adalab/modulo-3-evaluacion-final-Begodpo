// Fichero src/components/App.js
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import callToApi from "../services/api";
import hp from "../images/azul_1.jpg";
import harry from "../images/harry.jpg";

function App() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    callToApi().then((charactersData) => {
      setCharacter(charactersData);
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
        <section>
          <ul>
            <li>
              <img src={harry} alt="Foto de Harry Potter" />
              <h4>Harry Potter</h4>
              <p>Human</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
