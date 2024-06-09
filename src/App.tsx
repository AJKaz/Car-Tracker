// import { useState } from "react";
import "./styles.css";
import { Login } from "./Components/Login";
import { Button } from "./Components/Button";
import * as firebase from "./firebase";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Chevelle Tracker</h1>
      <Login />
      <Button
        onClick={() => {
          firebase.getData();
        }}
        text="TEMP - Get Data"
      ></Button>
    </>
  );
};

export default App;
