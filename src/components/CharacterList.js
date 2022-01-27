import CharacterCard from "./CharacterCard";
import "../styles/componentes/CharactersList.scss";
function CharacterList(props) {
  console.log(props);
  const characterElements = props.characters.map((character, index) => {
    return (
      <li key={index}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="charactersList">{characterElements}</ul>
    </section>
  );
}

export default CharacterList;
