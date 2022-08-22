import { useState } from "react";
import FormComponent from "../components/FormComponent";
// import InputComponent from "../components/InputComponent";
import Button from "react-bootstrap/Button";
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
      <div style={styles.input}>
        <FormComponent
          label={"User Name :"}
          value={login.username}
          name={"username"}
          type={"username"}
          placeHolder={"Enter Username"}
          onChange={onChange}
        />
        <FormComponent
          label={"Password :"}
          value={login.password}
          name={"password"}
          type={"password"}
          placeHolder={"Enter Password"}
          onChange={onChange}
        />
        <div style={styles.button}>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: "20px",
    height: "30vh",
    backgroundColor: "gray",
    alignItems: "center",
    width: "40vw",
    maxWidth: "450px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    marginTop: 20,
    width: "25%",
    display: "flex",
    justifyContent: "center",
  },
};
