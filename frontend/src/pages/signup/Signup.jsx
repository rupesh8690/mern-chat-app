import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
export default function Signup() {
    const [inputs,setInputs] = useState({
      fullName:'',
      userName:'',
      password:'',
      confirmPassword:'',
      gender:''
    })

    const {loading,signup}=useSignup();
    const handleCheckbox=(gender) =>{
      setInputs({...inputs,gender});
    }

    const handleSubmit =async(event) =>{
      event.preventDefault();
      // console.log(inputs);
      // console.log(inputs.gender);
      await signup(inputs);

    }
    return (
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        {/* the glass effect is generated from the website https://tailwindcss-glassmorphism.vercel.app/
              // generate the required design and pase the class in the div just below of this comment */}
        <div className="p-6 w-full bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
          <h1 className="p-4 text-center font-semibold text-3xl text-gray-300">
            Sign Up 
            <span className="text-blue-500">ChatApp</span>
          </h1>
  
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input type="text"  placeholder="Enter full name" className="w-full input input-bordered h-10"
              value={inputs.fullName} onChange={(e) => setInputs({...inputs,fullName:e.target.value})} />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input type="text"  placeholder="Enter username" className="w-full input input-bordered h-10"
              value={inputs.username} onChange={(e) => setInputs({...inputs,userName:e.target.value})} />
            </div>
  
            <div>
              <label className="label p-2">
                  <span className="text-base label-text">Password</span>
              </label>
              <input type="password" placeholder="Enter password" className="input input-bordered w-full h-10"
              value={inputs.password} onChange={(e) => setInputs({...inputs,password:e.target.value})} />
            </div>

            <div>
              <label className="label p-2">
                  <span className="text-base label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm Password" className="input input-bordered w-full h-10" 
              value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}/>
            </div>

            {/* gender checkbox goes here */}
            <GenderCheckbox onCheckboxChange={handleCheckbox} selectedGender={inputs.gender}/>
            <Link to="/login" className="text-sm hover:underline hover:text-blue-600 inline-block mt-2">Already have an account?</Link>
             <div>
              <button className="btn btn-block btn-sm mt-2" disabled={loading} >
                {loading ? <span className="loading loading-spinner loading-md"></span>:"Signup"}
              </button>
              {/* button block and width full both are same */}
             </div>
          </form>
        </div>
      </div>
    );
  }
  

  //STARTER CODE FOR THIS FILE
  
//   import GenderCheckbox from "./GenderCheckbox";
// export default function Signup() {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         {/* the glass effect is generated from the website https://tailwindcss-glassmorphism.vercel.app/
//               // generate the required design and pase the class in the div just below of this comment */}
//         <div className="p-6 w-full bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
//           <h1 className="p-4 text-center font-semibold text-3xl text-gray-300">
//             Sign Up 
//             <span className="text-blue-500">ChatApp</span>
//           </h1>
  
//           <form action="">
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Full Name</span>
//               </label>
//               <input type="text" name="" id="" placeholder="Enter full name" className="w-full input input-bordered h-10" />
//             </div>

//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input type="text" name="" id="" placeholder="Enter username" className="w-full input input-bordered h-10" />
//             </div>
  
//             <div>
//               <label className="label p-2">
//                   <span className="text-base label-text">Password</span>
//               </label>
//               <input type="password" placeholder="Enter password" class="input input-bordered w-full h-10" />
//             </div>

//             <div>
//               <label className="label p-2">
//                   <span className="text-base label-text">Confirm Password</span>
//               </label>
//               <input type="password" placeholder="Confirm Password" class="input input-bordered w-full h-10" />
//             </div>

//             {/* gender checkbox goes here */}
//             <GenderCheckbox/>
//             <a href="#" className="text-sm hover:underline hover:text-blue-600 inline-block mt-2">Already have an account?</a>
//              <div>
//               <button className="btn btn-block btn-sm mt-2">Sign up</button>
//               {/* button block and width full both are same */}
//              </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
  