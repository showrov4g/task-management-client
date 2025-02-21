import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import axios from "axios";

const Login = () => {
  const { createUserWithGoogle } = useContext(MyContext);

  const handleLogin = async () => {
    createUserWithGoogle()
      
  };
  return (
    <div>
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
