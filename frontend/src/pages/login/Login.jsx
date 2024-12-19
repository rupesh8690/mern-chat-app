import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
export default function Login() {

  let [userName,setUserName]=useState("");
  let [password,setPassword]=useState("");

  const {loading,login} =useLogin();

  const handleSubmit=async(e) =>{
    e.preventDefault();
    await login(userName,password)
    
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      {/* the glass effect is generated from the website https://tailwindcss-glassmorphism.vercel.app/
            // generate the required design and pase the class in the div just below of this comment */}
      <div className="p-6 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
        <h1 className="p-4 text-center font-semibold text-3xl text-gray-300">
          Login
          <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text"  placeholder="Enter Username" className="w-full input input-bordered h-10"
            value={userName}  onChange={(e) => setUserName(e.target.value)}/>
          </div>

          <div>
            <label className="label p-2">
                <span className="text-base label-text">Password</span>
            </label>
            <input type="text" placeholder="Enter password" className="input input-bordered w-full h-10"
            value={password} onChange={(e) =>setPassword(e.target.value)} />
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 inline-block mt-2">{"Don't"} have an account?</Link>
           <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading?<span className="loading loading-spinner loading-md"></span>:"Login"}
              </button>
            {/* button block and width full both are same */}
           </div>
        </form>
      </div>
    </div>
  );
}
