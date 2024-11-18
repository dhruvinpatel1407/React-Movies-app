import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Formlogin from "./Component/Formlogin";
import SignupForm from "./Component/SignupForm";

function Login() {
  const navigate = useNavigate();
  const { formType } = useParams(); // Extract the routing parameter

  // Check if the current formType is 'login' or 'signup'
  const isLogin = formType === "login";

  // Callback to handle login data
  const handleLoginData = (data) => {
    console.log("Login Data:", data);
  };

  // Callback to handle signup data
  const handleSignUpData = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className=" mt-16 bg-black">
      {/* Button Group */}
      <div className="flex justify-center items-center pt-8">
        {/* Login Button */}
        <button
          onClick={() => navigate("/movie-world/login")}
          className={`bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-xl font-medium py-2 px-24 ${
            isLogin ? "border-2 border-white" : ""
          }`}
        >
          Login
        </button>
        {/* Signup Button */}
        <button
          onClick={() => navigate("/movie-world/signup")}
          className={`bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-xl font-medium py-2 px-24 ${
            !isLogin ? "border-2 border-white" : ""
          }`}
        >
          Signup
        </button>
      </div>

      {/* Form Rendering */}
      <div className="pt-8">
        {isLogin ? (
          <Formlogin getLoginData={handleLoginData} />
        ) : (
          <SignupForm getSignUpData={handleSignUpData} />
        )}
      </div>
    </div>
  );
}

export default Login;
