import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";

const Filter = (props) => {
  return (
    <section>
      <form action="">
        <FilterCharacter
          handleFilter={props.handleFilter}
          filterCharacter={props.filterCharacter}
        />
        <FilterHouse
          handleFilter={props.handleFilter}
          filterHouse={props.filterHouse}
        />
      </form>
    </section>
  );
};

export default Filter;
