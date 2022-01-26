import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";

const Filter = (props) => {
  return (
    <section>
      <form action="">
        <FilterCharacter handleFilter={props.handleFilter} />
        <FilterHouse />
      </form>
    </section>
  );
};

export default Filter;
