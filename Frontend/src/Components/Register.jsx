import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ()=>{
    const navigate= useNavigate();
    const [signUpData,setSignUpData] = useState({
        fullName:"",
        emailId:"",
        password:""
    });
    const handlefullName = (e) => {
        setSignUpData({
            ...signUpData,
            fullName:e.target.value
        })
    }
    const handleEmailId = (e) => {
        setSignUpData({
            ...signUpData,
            emailId:e.target.value
        })
    }
    const handlePassword = (e) => {
        setSignUpData({
            ...signUpData,
            password:e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:3000/auth/register", signUpData, {
              withCredentials: true,
            });
            navigate("/");
      
           console.log(response)
          } catch (error) {
            console.error("Error registering user", error);
            alert("Registration failed, please try again.");
          }
        }; 

        return(<>
    <form onSubmit={handleSubmit}>
    <input
          type="fullName"
          placeholder="fullName"
          value={signUpData.fullName}
          name="fullName"
          onChange={handlefullName}
        /><br/>
       
        <input
          type="email"
          placeholder="Email"
          value={signUpData.emailId}
          name="emailId"
          onChange={handleEmailId}
        /><br/>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={signUpData.password}
          onChange={handlePassword}
        /><br/>

        <button type="submit">Signup</button>
      </form>
    </>)
}
export default Register;