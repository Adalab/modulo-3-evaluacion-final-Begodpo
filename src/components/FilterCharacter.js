function FilterCharacter(props) {
  const handleChangeInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label htmlFor="name">Busca por personaje: </label>
      <input
        id="name"
        type="text"
        name="name"
        value={props.filterCharacter}
        onChange={handleChangeInput}
      />
    </>
  );
}

export default FilterCharacter;
