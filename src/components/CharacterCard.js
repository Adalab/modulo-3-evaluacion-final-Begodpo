import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CharacterCard = (props) => {
  const getImage = () => {
    return props.character.image === ""
      ? `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`
      : props.character.image;
  };
  const translateSpecies = () => {
    if (props.character.species === "human") {
      return "Humano";
    } else if (props.character.species === "half-giant") {
      return "Semi-gigante";
    } else if (props.character.species === "ghost") {
      return "Fantasma";
    } else if (props.character.species === "werewolf") {
      return "Hombre-lobo";
    }
  };
  return (
    <Link to={`/character/${props.character.id}`}>
      <article className="charactersList__card">
        <img
          className="charactersList__card--image"
          src={getImage()}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="charactersList__card--title">{props.character.name}</h4>
        <p className="charactersList__card--text">{translateSpecies()}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
