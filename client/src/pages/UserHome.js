import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listUsers } from "../store/actions/userActions";
import { increment, decrement, incrementByAmount } from "../store/reducers/countReducer";
import Loader from "../components/Loader";
import Filter from "../components/Filter";
import User from "../components/User";
const UserHome = () => {
  const { users, usersContainer, loader } = useSelector((state) => state.users);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // const inputRef = useRef('');
  // const formSubmit = (e) => {
  //     e.preventDefault();
  //     // console.log(inputRef.current.value)
  //     // dispatch(addUser(inputRef.current.value));
  //     // inputRef.current.value = '';

  // }
  useEffect(() => {
    dispatch(listUsers());
  }, []);
  // console.log(usersContainer);
  const Increment = () => {
    dispatch(increment());
  };
  const Decrement = () => {
    dispatch(decrement());
  };
  const IncrementByAmount = (e) => {
    dispatch(incrementByAmount(e));
  };

  return !loader ? (
    <>
      <Filter />
      <button className="inc" onClick={Increment}>
        Inc
      </button>
      <button className="dec" onClick={Decrement}>
        Dec
      </button>
      <button className="incby" onClick={() => IncrementByAmount(5)}>
        Increament by 6
      </button>
      <h1>{count}</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User key={index} index={index} user={user} />
          ))}
        </tbody>
      </table>{" "}
    </>
  ) : (
    <Loader />
  );

  // <form onSubmit={formSubmit}>
  //     <input type='text' name='name' placeholder='Enter User Names' ref={inputRef} /><br /><br />
  //     <input type='submit' className='btn btn-submit' value='Submit' />
  // </form>
};;

export default UserHome;
