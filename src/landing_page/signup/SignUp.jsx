import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function SignUp() {

  const [form,setForm] = useState({
    username : "",
    email : "",
    password : ""
  });

  const [successmsg,setSuccessMsg] = useState("");
  const [errormsg,setErrorMsg] = useState("");

   
  const signup = async() =>{
    try{ 
    const response = await axios.post("http://localhost:3002/signup",form,{ withCredentials : true });

    if(response.data.success){
        setForm({
          username : "",
          email : "",
          password : ""
        });
        setSuccessMsg(response.data.message);
      window.location.href = "http://localhost:5174/";
    }

    }
    catch(err){
      setErrorMsg(err?.response?.data?.message || "some error occured");
    }
  }
    

  return (
    <div className="container min-vh-auto  d-flex flex-column justify-content-center align-items-center">


        {errormsg ? <p style={{color:"red"}} className="mt-5">{errormsg}</p> : null}
        {successmsg ? <p style={{color:"green"}} className="mt-5">{successmsg}</p> : null}


      <div className="signupContainer rounded-4 p-4 m-5 d-flex w-50">
        <form className="d-flex flex-column w-100" onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-center text-primary">Create Zerodha Account</h1>
        <h2 className="text-center mb-3">Start your investement journey today</h2>

        <label htmlFor="username" className="mb-2">Full Name</label>
        <input type="text" name="username" value={form.username} id="username" placeholder="Enter your full name" className="p-2 rounded-2 border mb-3 ms-2" onChange={(e) => setForm({...form, username:e.target.value})}></input>

        <label htmlFor="email" className="mb-2">Email  address</label>
        <input type="email" name="email" value={form.email} id="email" placeholder="name@example.com" className="p-2 rounded-2 border mb-3 ms-2" onChange={(e) => setForm({...form, email:e.target.value})}></input>

        <label htmlFor="password" className="mb-2">Password</label>
        <input type="password" name="password" value={form.password} id="password" placeholder="Create a strong password" className="p-2 rounded-2 border mb-3 ms-2" onChange={(e) => setForm({...form, password:e.target.value})}></input>

        <button type="submit" className="my-3 p-2 rounded-2 border btn btn-primary" onClick={signup}>Sign up</button>

        <p className="text-center fs-6">Already have an account? <Link to="/login" className="text-decoration-none">Login here</Link></p>
        </form>

      </div>
    </div>
  );
};