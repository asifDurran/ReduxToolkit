import { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredUser } from "../store/reducers/userReducer";
const Filter = () => {
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const filterUser = () => {
    dispatch(filteredUser(inputRef.current.value));
  };
  // console.log("Dispalyed from Filter", inputRef.current.value);
  return (
    <>
      <input
        type="text"
        name="filter"
        className="form-control mb-3 mt-3"
        placeholder="Search By Name"
        ref={inputRef}
        onChange={filterUser}
      />
    </>
  );
};;

export default Filter;
