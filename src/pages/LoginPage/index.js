import "./loginPage.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { login } from "../../store/user/thunks";
import { selectToken } from "../../store/user/selectors";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account yet? Click <Link to="/signup">here</Link> to sign
        up!
      </p>
    </div>
  );
};

export { LoginPage };
