function FilterCharacter(props) {
  const handleChangeInput = (ev) => {
    props.handleFilter(ev.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="name">Busca por personaje: </label>
      <input
        type="text"
        name="name"
        value={props.filterCharacter}
        onChange={handleChangeInput}
      />
    </>
  );
}

export default FilterCharacter;
