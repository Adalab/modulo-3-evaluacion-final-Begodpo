import { Link } from "react-router-dom";
function CharacterDetail(props) {
  if (props.character === undefined) {
    return <p>personaje no encontrado</p>;
  }

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
  const translateStatus = () => {
    return props.character.alive === true ? "Viv@ " : "Fallecid@";
  };
  const translateGender = () => {
    return props.character.gender === "female" ? "Mujer" : "Hombre";
  };

  return (
    <section>
      <h2>Detalle del personaje</h2>
      <Link to="/">
        <button>Volver</button>
      </Link>

      <article>
        <img
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4>{props.character.name}</h4>
        <p>Especie: {translateSpecies()}</p>
        <p>Estatus: {translateStatus()}</p>
        <p>Género: {translateGender()}</p>
        <p>Casa: {props.character.house}</p>
        <p>Nombre alternativo: {props.character.alternate_names}</p>
      </article>
    </section>
  );
}

export default CharacterDetail;
