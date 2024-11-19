import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Formlogin from "./Component/Formlogin";
import SignupForm from "./Component/SignupForm";
import SignUpCard from "./Component/SignUpCard";

function Login() {
  const navigate = useNavigate();
  const { formType } = useParams(); // Extract the routing parameter

  const [registeredUsers, setRegisteredUsers] = useState([]);

  // Check if the current formType is 'login' or 'signup'
  const isLogin = formType === "login";

  // Redirect to login by default if formType is invalid or missing
  useEffect(() => {
    if (!formType || (formType !== "login" && formType !== "signup")) {
      navigate("/movie-world/login", { replace: true }); // Replace prevents back navigation to invalid routes
    }
  }, [formType, navigate]);

  // Callback to handle signup data
  const handleSignUpData = (data) => {
    const userExists = registeredUsers.some(
      (user) => user.email === data.email
    );
    if (userExists) {
      alert("Email is already registered! Please login.");
    } else {
      setRegisteredUsers([...registeredUsers, data]); // Add new user to registered users
      alert("Signup successful! Please login.");
    }
  };

  // Callback to handle login data
  const handleLoginData = (data) => {
    const user = registeredUsers.find((user) => user.email === data.email);
    if (!user) {
      alert("No account found! Please sign up first.");
    } else if (user.password !== data.password) {
      alert("Password is incorrect!");
    } else {
      alert("Successfully logged in!");
    }
  };

  return (
    <div className="pt-16 bg-black min-h-screen">
      {/* Button Group */}
      <div className="flex sm:flex-row justify-center items-center pt-8 space-x-4">
        {/* Login Button */}
        <button
          onClick={() => navigate("/movie-world/login")}
          className={`bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-base sm:text-xl font-medium py-2 px-12 sm:px-24 ${
            isLogin ? "border-2 border-white" : ""
          }`}
        >
          Login
        </button>
        {/* Signup Button */}
        <button
          onClick={() => navigate("/movie-world/signup")}
          className={`bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-base sm:text-xl font-medium py-2 px-12 sm:px-24 ${
            !isLogin ? "border-2 border-white" : ""
          }`}
        >
          Signup
        </button>
      </div>

      {/* Form Rendering */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 mt-8">
        {isLogin ? (
          <Formlogin getLoginData={handleLoginData} />
        ) : (
          <SignupForm getSignUpData={handleSignUpData} />
        )}
      </div>
      <div>
        <SignUpCard Users={registeredUsers}/>
      </div>
    </div>
  );
}

export default Login;
