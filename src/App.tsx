import { Login } from "./Components/Login";
import HomePage from "./Components/HomePage";
import useAuth from "./useAuth";

const App: React.FC = () => {
  const { user, loading } = useAuth();

  return loading ? (
    <></>
  ) : (
    <>
      <h1>Chevelle Tracker</h1>
      {user ? <HomePage /> : <Login />}
    </>
  );
};

export default App;
