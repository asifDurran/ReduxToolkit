import { useParams } from "react-router"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { singleUser } from '../store/actions/userActions'
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/Loader'
export const UserDetails = () => {
    const dispatch = useDispatch();
    const { loader, user } = useSelector((state) => state.singleUser);
    const { id } = useParams();

    useEffect(() => {
        dispatch(singleUser(id))
    }, [])
    return !loader ? (
        <>
            <Link to='/' className='btn btn-dark mb-3 mt-2'>GO Back!</Link>
            <div className="card">
                <div className="card-header">
                    <h3><span className='text-info'>{user.name}</span> Details</h3>
                </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <div className="col-3 ">Name</div>
                        <div className="col-9 text-end">{user.name}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-3 ">Email</div>
                        <div className="col-9 text-end">{user.email}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-3 ">UserName</div>
                        <div className="col-9 text-end">{user.username}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-3 ">Website</div>
                        <div className="col-9 text-end">{user.website}</div>
                    </div>
                    {/* <div className="row mb-2">
                <div className="col-3">City</div>
                <div className="col-9 text-end">{user.address.city}</div>
            </div> */}
                </div>

            </div> </>)
        : (<Loader />)
}
