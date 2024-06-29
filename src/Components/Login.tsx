import { Button } from "./Button";
import { useState } from "react";
import * as firebase from "../firebase";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleLogin = (): void => {
    firebase.login(username, password, stayLoggedIn);
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
      <section style={{ marginTop: "8px" }}>
        <label className="no-select">
          <input
            style={{ marginRight: "10px" }}
            type="checkbox"
            checked={stayLoggedIn}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setStayLoggedIn(e.target.checked);
            }}
          />
          Stay Logged In?
        </label>
      </section>
      <section style={{ marginTop: "10px" }}>
        <Button className="test" onClick={handleLogin} text="Login" />
      </section>
    </>
  );
};

export { Login };
