import { Link } from "react-router-dom";
import "../styles/componentes/CharacterDetail.scss";

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
    <section className="detailSection">
      <h2 className="detailSection__title">Detalle del personaje</h2>
      <Link to="/">
        <button className="detailSection__button">Volver</button>
      </Link>

      <article className="detailSection__article">
        <img
          className="detailSection__article--image"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="detailSection__article--title">
          {props.character.name}
        </h4>
        <p className="detailSection__article--text">
          Especie: {translateSpecies()}
        </p>
        <p className="detailSection__article--text">
          Estatus: {translateStatus()}
        </p>
        <p className="detailSection__article--text">
          Género: {translateGender()}
        </p>
        <p className="detailSection__article--text">
          Casa: {props.character.house}
        </p>
        <p className="detailSection__article--text">
          Nombre alternativo: {props.character.alternate_names}
        </p>
      </article>
    </section>
  );
}

export default CharacterDetail;
