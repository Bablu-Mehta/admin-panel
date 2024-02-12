import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/store";

const Auth = () => {
  const [admin, setAdmin] = useState();
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(authActions.login(admin));
  };
  return (
    <div>
      <input
        placeholder="enter email"
        onChange={(e) => setAdmin(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
};

export default Auth;
