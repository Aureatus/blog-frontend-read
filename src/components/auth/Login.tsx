import { useState, FormEvent } from "react";
import postLogin from "../../lib/fetch/auth/postLogin";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loginResponse = await postLogin(userName, password);
      const bearerToken = await loginResponse.token;
      localStorage.setItem("bearerToken", bearerToken);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => login(e)}>
        <label htmlFor="userName">
          Username
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;