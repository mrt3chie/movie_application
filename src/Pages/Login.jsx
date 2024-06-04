import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Configuration/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signin } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(email, password);
      navigate("/");
    } catch (error) {
      setError("Failed to Login");
    }
    setLoading(false);
  }

  return (
    <div className="flex items-center justify-between lg:gap-5 lg:p-16">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-60 bg-black">
          <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600"></div>
        </div>
      )}

      <div className="flex-1 mt-5  mx-8 lg:mx-4 xl:mx-16">
        <h1 className="text-3xl font-bold text-[#E11D48]">Sign In 👋</h1>
        <p className="text-[18px]">Enter your credentials to access</p>
        {error && <p className="text-red-600 lg:mt-8 text-center">{error}</p>}
        <div className="mt-5 lg:mt-12">
          <form onSubmit={handleSubmit}>
            <p className="text-[16px] font-medium">Email Address*</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="p-4 rounded-[6px] mt-3 w-full border-[0.5px] border-black mb-6"
            />
            <p className="text-[16px] font-medium">Password*</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-4 rounded-[6px] mt-3 w-full border-[0.5px] border-black mb-6"
            />
            <button className="bg-[#E11D48] mt-8 rounded-[6px] text-white w-full font-medium px-6 py-5">
              Sign In
            </button>
          </form>
          <p className="text-center mt-6">or</p>
          <Link to="/signup">
            <button className="bg-black mt-6 rounded-[6px] text-white w-full font-medium px-6 py-5">
              Register Account
            </button>
          </Link>
        </div>
      </div>
      <img
        src="/loginpage_img.png"
        alt=""
        className="hidden lg:flex lg:h-[550px] xl:h-[850px]"
      />
    </div>
  );
};

export default Login;
