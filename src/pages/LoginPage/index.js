import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { login } from "../../store/user/thunks";
import { selectToken } from "../../store/user/selectors";
import { Container, Button, Input, SubText, Title } from "../../styled";

export const LoginPage = () => {
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
    <Container>
      <Title>Login</Title>
      <form onSubmit={submitForm}>
        <Input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <Button type="submit">Login</Button>
      </form>
      <SubText>
        Don't have an account yet? Click{" "}
        <Link to="/signup" style={{ textDecoration: "none", color: "#22eaaa" }}>
          <strong>here</strong>
        </Link>{" "}
        to sign up!
      </SubText>
    </Container>
  );
};
