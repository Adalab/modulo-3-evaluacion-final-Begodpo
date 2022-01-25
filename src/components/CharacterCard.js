const CharacterCard = (props) => {
  const getImage = () => {
    return props.character.image === ""
      ? `https://via.placeholder.com/210x295/ffffff/666666/?text=${props.character.name}`
      : props.character.image;
  };
  return (
    <article>
      <a href="#">
        <img
          src={getImage()}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4>{props.character.name}</h4>
        <p>{props.character.species}</p>
      </a>
    </article>
  );
};
export default CharacterCard;
