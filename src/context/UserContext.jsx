import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(async function () {
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  }, []);

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = LOGIN({ username, password });
      const tokenRes = await fetch(url, options);

      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);

      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      navigate("/feed");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, login, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
