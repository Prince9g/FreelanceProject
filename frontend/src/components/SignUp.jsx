import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({email: '', password: '', confirmPassword: ''});
  const onChangeHandler = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Passwords do not match!");
    }
    try {
      const res = await axios.post("http://localhost:8080/admin/add", formData
      )
      if(res){
        toast.success(res.data.message);
        setTimeout(() => {
          navigate('/sign-in');
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
    setFormData({email: '', password: '', confirmPassword: ''});
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <div className="flex flex-col items-center justify-center gap-5 w-96 p-4 border border-gray-300 rounded-md">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        {/* Sign Up form */}
        <form className="flex flex-col gap-4 w-full m-2" onSubmit={onSubmitHandler}>
          {/* email */}
          <input type="email" name="email" value={formData.email} className="w-full border rounded-md p-2" placeholder="Email" onChange={onChangeHandler}/>
          {/* password */}
          <input type="password" name="password" value={formData.password} className="w-full border rounded-md p-2" placeholder="Password" onChange={onChangeHandler}/>
          {/* confirm password */}
          <input type="password" name="confirmPassword" value={formData.confirmPassword} className="w-full border rounded-md p-2" placeholder="Confirm Password" onChange={onChangeHandler}/>
          {/* submit button */}
          <button type="submit"  className="w-full border rounded-full p-2 bg-primary hover:bg-[#906ebf]">Sign Up</button>
        </form>
        <p className="mt-4 text-center">Already have an account? <Link to="/sign-in" className="text-[#60a1ea]">Log In</Link></p>
      </div>
    </div>
  )
}

export default SignUp
