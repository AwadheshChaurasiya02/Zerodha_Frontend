import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Login() {

  const [form,setForm] = useState({
    username : "",
    password : ""
  });
  
  const [errormsg,setErrormsg] = useState("");

  const login = async() =>{
    try{
    const response = await axios.post("http://localhost:3002/login",form,{ withCredentials : true });

    if(response.data.success){

      setForm({
      username : "",
      password : ""
      });

      window.location.href = "http://localhost:5174/";
    }
    }
  catch(err){
    setErrormsg(err?.response?.data?.message || "some error occured");
  }
  }

  return (
    <div className="container min-vh-auto  d-flex flex-column justify-content-center align-items-center">

      {errormsg ? <p style={{color:"red"}} className="mt-5">{errormsg}</p> : null}

      <div className="signupContainer rounded-4 p-4 m-5 d-flex w-50">
        <form className="d-flex flex-column w-100" onSubmit={(e) => e.preventDefault()}>
  
        <h1 className="text-center mb-3 text-primary">Sign into your trading account</h1>

        <label htmlFor="username" className="mb-2">Full Name</label>
        <input type="text" name="username" value={form.username} id="username" placeholder="Enter your full name" className="p-2 rounded-2 border mb-3 ms-2" onChange={(e) => setForm({...form, username:e.target.value})}></input>

        <label htmlFor="password" className="mb-2">Password</label>
        <input type="password" name="password" value={form.password} id="password" placeholder="Enter password" className="p-2 rounded-2 border mb-3 ms-2" onChange={(e) => setForm({...form, password:e.target.value})}></input>

        <button type="submit" className="my-3 p-2 rounded-2 border btn btn-primary" onClick={login}>Login</button>

        <p className="text-center fs-6">Don't have an account? <Link to="/signup" className="text-decoration-none">Register here</Link></p>
        </form>
      </div>
    </div>
  );
};