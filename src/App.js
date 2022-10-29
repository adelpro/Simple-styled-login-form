import "./styles.css";
import { useEffect, useState } from "react";
import Login from "./Login";
export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);
  return <Login />;
}
