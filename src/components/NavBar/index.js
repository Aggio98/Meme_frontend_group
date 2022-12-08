import "./navbarStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { logOut } from "../../store/user/slice";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = useSelector(selectToken);

  return (
    <div className="navbar">
      {location.pathname === "/mehworld" ? (
        <div className="navTitDis">MehWorld</div>
      ) : (
        <Link to="/mehworld" className="navTit">
          MehWorld
        </Link>
      )}

      <Link to="/" className="navLogo">
        MEh MEh
      </Link>

      {!token ? (
        <div className="navRight">
          {location.pathname === "/login" ? (
            <div className="navTitDis">Login</div>
          ) : (
            <Link to="/login" className="navTit">
              Login
            </Link>
          )}
        </div>
      ) : (
        <Link
          className="navTit"
          to="/"
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </Link>
      )}
    </div>
  );
};

export { NavBar };
