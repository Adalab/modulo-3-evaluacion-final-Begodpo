import { Link } from "react-router-dom";
function CharacterDetail(props) {
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
        <p>Especie: {props.character.species}</p>
        <p>Estatus: {props.character.alive}</p>
        <p>Género: {props.character.gender}</p>
        <p>Casa: {props.character.house}</p>
        <p>Nombre alternativo: {props.character.alternate_names}</p>
      </article>
    </section>
  );
}

export default CharacterDetail;
