import React, { useState } from "react";
import Formlogin from "./Component/Formlogin";
import SignupForm from "./Component/SignupForm";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  console.log(isLogin);
  return (
    <div className=" mt-16 bg-black">
      <div>
        <div className="flex justify-center items-center py-8">
          <button
            onClick={(e) => {
              setIsLogin(true);
            }}
            className="bg-white bg-opacity-10 hover:bg-opacity-30 text-white text-xl font-medium py-2 px-24 "
          >
            Login
          </button>
          <button
            onClick={(e) => {
              setIsLogin(false);
            }}
            className="bg-white bg-opacity-10 hover:bg-opacity-30 text-white text-xl font-medium py-2 px-24"
          >
            Signup
          </button>
        </div>
      </div>
      {isLogin ? <Formlogin /> : <SignupForm />}
    </div>
  );
}

export default Login;
