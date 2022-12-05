import "./signUpPage.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signUp } from "../../store/user/thunks";
import { selectToken } from "../../store/user/selectors";

const SignUpPage = () => {
  const [name, setName] = useState("");
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
    dispatch(signUp(name, email, password));
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitForm}>
        <input
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export { SignUpPage };
