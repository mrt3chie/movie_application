import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = ({ onSubmit, loading }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }
    onSubmit({ name, email, password });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5 lg:mt-12">
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-[16px] font-medium">Your Name*</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="p-4 rounded-[6px] mt-3 w-full border-[0.5px] border-black mb-6"
        />
        <p className="text-[16px] font-medium">Email Address*</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="p-4 rounded-[6px] mt-3 w-full border-[0.5px] border-black mb-6"
        />
        <p className="text-[16px] font-medium">Create Password*</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          className="p-4 rounded-[6px] mt-3 w-full border-[0.5px] border-black mb-6"
        />

        <p className="font-medium">
          <input type="checkbox" className="mr-2" /> I agree to terms &
          conditions
        </p>

        <button
          type="submit"
          className="bg-[#E11D48] mt-8 rounded-[6px] text-white w-full font-medium px-6 py-5"
          disabled={loading}
        >
          Register Account
        </button>
        <p className="text-center mt-6">or</p>
      </form>
      <Link to="/login">
        <button
          type="button"
          className="bg-black mt-6 rounded-[6px] text-white w-full font-medium px-6 py-5"
          disabled={loading}
        >
          Sign In
        </button>
      </Link>
    </>
  );
};

export default SignupForm;
