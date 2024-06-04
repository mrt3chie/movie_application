import React, { useState } from "react";
import { useAuth } from "../Configuration/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Configuration/firebase";
import SignupForm from "../Components/SignupForm";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async ({ name, email, password }) => {
    setLoading(true);
    try {
      const { user } = await signup(email, password);

      await addDoc(collection(db, "users"), {
        userId: user.uid,
        name: name,
        email: email,
        createdAt: serverTimestamp(),
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError("Account Creation failed");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="relative flex items-center justify-between lg:gap-5 lg:p-16">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-60 bg-black">
          <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600"></div>
        </div>
      )}
      <div className="flex-1 mt-5  mx-8 lg:mx-4 xl:mx-16">
        <h1 className="text-3xl font-bold text-[#E11D48]">
          Create an Account 👋
        </h1>

        <p className="text-[18px]">
          Kindly fill in your details to create an account
        </p>
        <SignupForm onSubmit={handleSignup} loading={loading} />
      </div>
      <img
        src="/loginpage_img.png"
        alt="Signup illustration"
        className="hidden lg:flex lg:h-[550px] xl:h-[850px]"
      />
    </div>
  );
};

export default Signup;
