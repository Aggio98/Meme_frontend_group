import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signUp } from "../../store/user/thunks";
import { selectToken } from "../../store/user/selectors";

import { Container, Button, Title, Input } from "../../styled";

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
    <Container>
      <Title>Sign Up</Title>
      <form onSubmit={submitForm}>
        <Input
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
        <Button type="submit">Sign up</Button>
      </form>
    </Container>
  );
};

export { SignUpPage };
