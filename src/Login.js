import "./styles.css";
import { useEffect, useRef, useState } from "react";
import showPassword from "./svgs/showpassword.svg";
import hidePasword from "./svgs/hidepassword.svg";
export default function Login() {
  const usernameRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit");
  };
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__controls">
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={() => setPasswordType((prev) => !prev)}>
            {passwordType ? (
              <img src={hidePasword} alt="Hide" />
            ) : (
              <img src={showPassword} alt="Show" />
            )}
          </div>
        </div>
        <div className="form__controls">
          <button className="button">Login</button>
        </div>
      </form>
    </div>
  );
}
