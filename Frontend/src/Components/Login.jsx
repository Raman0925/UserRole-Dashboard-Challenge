import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "./context"
import Dashboard from "./Dashboard";
import { Link } from 'react-router-dom';


const Login = () => {
const [isloggedIn , setIsloggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    userType: "",
    emailId: "",
    password: "",
  });
  const handleUserType = (e) => {
    setLoginData({
      ...loginData,
      userType: e.target.value,
    });
  };
  const handleEmail = (e) => {
    setLoginData({
      ...loginData,
      emailId: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/auth/login",
        loginData,
        { withCredentials: true }
      );
      
      setIsloggedIn(true);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <p>Not Registered? 
     <Link to="/register">register</Link>
     </p>

      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          id="admin"
          name="userType"
          checked={loginData.userType === "admin"}
          value="admin"
          onChange={handleUserType}
        />
        <label htmlFor="admin">admin</label>
        <br />
        <input
          type="radio"
          id="user"
          name="userType"
          checked={loginData.userType === "user"}
          value="user"
          onChange={handleUserType}
        />
        <label htmlFor="user">user</label>
        <br />
        <input
          type="email"
          placeholder="Email"
          value={loginData.emailId}
          name="emailId"
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handlePassword}
        />

        <button type="submit">Login</button>
      </form>

     { isloggedIn && <Dashboard loginData={loginData}/>}
      
    </>
  );
};
export default Login;
