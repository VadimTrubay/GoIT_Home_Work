import styles from "./SearchBox.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeFilter, selectFilter} from "../../redux/filtersSlice.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const contactToFind = useSelector(selectFilter);

  const handleFilter = (evt) => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <div className={styles.search_box}>
      <p>Find contact by name</p>
      <input
        name="search"
        type="text"
        value={contactToFind}
        onChange={handleFilter}/>
    </div>
  );
};

export default SearchBox;
