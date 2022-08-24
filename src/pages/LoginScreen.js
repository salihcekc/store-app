import { useState } from "react";
import FormComponent from "../components/FormComponent";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import GetDynamicDimensions from "../hooks/GetDynamicDimensions";

function LoginScreen() {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [screenSize, getDimension] = GetDynamicDimensions();
  const { dynamicWidth, dynamicHeight } = screenSize;

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

  const styles = {
    container: {
      height: dynamicHeight / 2,
      width: dynamicWidth,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      borderRadius: "20px",
      height: dynamicHeight / 3,
      backgroundColor: "gray",
      alignItems: "center",
      width: dynamicWidth / 2,
      maxWidth: "450px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      webkitBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      // mozBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    },
    button: {
      marginTop: 20,
      width: "25%",
      height:"20%",
      display: "flex",
      justifyContent: "center",
    },
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
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

