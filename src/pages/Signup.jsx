import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [show, setshow] = useState(false)
  const navigate = useNavigate();

const handleSubmit = ()=>{
  navigate('/verify');
}

  return (
    <div className="min-h-screen flex font-poppins bg-[#EDF4F2]">
      {/* Left Side with clip-path */}
      <div className="w-1/2 bg-[#31473A] text-white px-16 py-10 relative clip-diagonal hidden lg:flex flex-col items-center justify-center">
        <div className=''>
          <h1 className="text-4xl font-bold">LOREM IPSUM DOLOR</h1>
          <p className="mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Duis cursus gravida ac.
          </p>
        </div>
        <div className="flex  gap-6 text-2xl">
          <i className="ri-github-fill hover:text-gray-300 cursor-pointer"></i>
          <i className="ri-twitter-fill hover:text-gray-300 cursor-pointer"></i>
          <i className="ri-linkedin-box-fill hover:text-gray-300 cursor-pointer"></i>
          <i className="ri-discord-fill hover:text-gray-300 cursor-pointer"></i>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 w-full bg-[#EDF4F2] flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl text-[#31473A] lg:text-start text-center font-bold mb-8">Create Account</h2>

          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 border border-[#31473A] py-2 rounded-md hover:bg-blue-50">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              <span className="text-sm text-[#31473A]">Sign up with Google</span>
            </button>
          </div>

          <div className="flex items-center justify-between my-6">
            <hr className="w-1/3 border-[#31473A]" />
            <span className="text-sm text-[#31473A]">or Sign In with</span>
            <hr className="w-1/3 border-[#31473A]" />
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-[#31473A] bg-transparent focus:outline-none py-2 text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-[#31473A] bg-transparent focus:outline-none py-2 text-sm"
            />
            <div className="relative">
              <input
                type={show?"text":"password"}
                placeholder="Password"
                className="w-full border-b border-[#31473A] bg-transparent focus:outline-none py-2 text-sm pr-8"
              />
              <i onClick={()=>setshow(!show)} className={`${show?"ri-eye-off-line":"ri-eye-line"} absolute right-2 top-2 text-gray-500 cursor-pointer text-lg`}></i>
            </div>
            <button
              type="submit"
              className="w-full bg-[#31473A] text-white py-2 rounded-md font-semibold hover:bg-[#31473A]"
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-gray-600 lg:text-start text-center mt-4">
            Already have an account?{' '}
            <Link to={'/login'} className="text-[#31473A] font-medium hover:underline">
              Log in
            </Link>
          </p>

          

          
        </div>
      </div>
    </div>
  );
}
