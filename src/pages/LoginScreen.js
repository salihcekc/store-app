import { useState } from "react";

import FormComponent from "../components/FormComponent";
import ButtonComponent from "../components/ButtonComponent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [login, setLogin] = useState({ username: "", password: "" });

  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.username === "a" && login.password === "a") {
      navigate("/main");
    } else {
      alert("Yanlış kullanıcı");
    }
  };

  return (
    <div style={styles.container}>
      <FormComponent
        value={login.username}
        name={"username"}
        type={"username"}
        placeHolder={"Enter Username"}
        onChange={onChange}
      />
      <FormComponent
        value={login.password}
        name={"password"}
        type={"password"}
        placeHolder={"Enter Password"}
        onChange={onChange}
      />
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}

export default LoginScreen;

const styles = {
  container: {
    height: "88.8vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};
