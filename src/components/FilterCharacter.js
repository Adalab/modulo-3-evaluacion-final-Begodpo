function FilterCharacter(props) {
  const handleChangeInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <div>
      <label className="form__label" htmlFor="name">
        Busca por personaje:{" "}
      </label>
      <input
        className="form__input"
        id="name"
        type="text"
        name="name"
        value={props.filterCharacter}
        onChange={handleChangeInput}
      />
    </div>
  );
}

export default FilterCharacter;
