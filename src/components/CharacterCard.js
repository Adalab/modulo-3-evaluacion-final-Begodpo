import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CharacterCard = (props) => {
  const getImage = () => {
    return props.character.image === ""
      ? `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`
      : props.character.image;
  };
  return (
    <Link to={`/character/${props.character.id}`}>
      <article>
        <img
          src={getImage()}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4>{props.character.name}</h4>
        <p>{props.character.species}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
