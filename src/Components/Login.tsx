import { Button } from "./Button";
import { useState } from "react";
import * as firebase from "../firebase";
import "../styles.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (): void => {
    firebase.login(username, password);
  };
  const handleLogout = (): void => {
    firebase.logout();
  };

  return (
    <>
      <section
        style={{
          display: "Flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="Username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          placeholder="Password"
          type="text"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </section>
      <section
        style={{
          display: "Flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Button onClick={handleLogin} text="Login" />
        <Button onClick={handleLogout} text="Logout" />
      </section>
    </>
  );
};

export { Login };
