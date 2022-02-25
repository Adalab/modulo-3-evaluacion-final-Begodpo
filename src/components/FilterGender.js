function FilterGender(props) {
  const handleChangeGender = (ev) => {
    props.handleFilter({
      key: "gender",
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <div className="form-gender">
        <label className="form__label">Filtra por género: </label>
        <select
          className="form__select"
          name="gender"
          id="gender"
          onChange={handleChangeGender}
          value={props.filterGender}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </>
  );
}

export default FilterGender;
