function FilterGender(props) {
  const handleChangeGender = (ev) => {
    props.handleFilter({
      key: "gender",
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <label htmlFor="">Filtra por género</label>
      <select
        name="gender"
        id="gender"
        onChange={handleChangeGender}
        value={props.filterGender}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unknown">Unknown</option>
      </select>
    </>
  );
}

export default FilterGender;
