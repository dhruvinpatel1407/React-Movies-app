import React, { useState } from "react";

function Formlogin({getLoginData}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formvalid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlechange = (e) => {
    //  console.log(e.target.id, e.target.value);
    if (e.target.id === "email") {
      validateEmail(e.target.value);
    } else if (e.target.id === "password") {
      validatePasswod(e.target.value);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g;

    let error = emailError;
    let valid = formvalid;

    if (!regex.test(email)) {
      error = "Please Enter valid email";
      valid = false;
    } else {
      error = "";
      valid = true;
    }

    setEmail(email);
    setEmailError(error);
    setFormValid(valid);

    return valid;
  };

  const validatePasswod = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    let error = passwordError;
    let valid = formvalid;

    if (!regex.test(password)) {
      error = "Please Enter valid password";
      valid = false;
    } else {
      error = "";
      valid = true;
    }

    setPassword(password);
    setPasswordError(error);
    setFormValid(valid);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email) && validatePasswod(password)) {
      // alert("Successfully Login");

      const userdata = {
        email,
        password,
      };
      getLoginData(userdata);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
     <div className="relative w-full h-screen bg-black">
  <div className="absolute mx-auto inset-0 bg-white bg-opacity-20 border border-white border-2 max-w-lg w-full">
    <form
      onSubmit={handleSubmit}
      className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-8"
    >
      <p className="text-white text-lg sm:text-xl">Get login to access your account</p>
      
      <label htmlFor="email" className="sr-only">Email Address</label>
      <input
        type="text"
        placeholder="Email Address"
        name="email"
        id="email"
        value={email}
        onChange={handlechange}
        className="text-white border border-white p-2 m-2 bg-transparent mt-12 w-full sm:w-3/4 lg:w-1/2"
      />
      <p className="text-red-500">{emailError}</p>
      
      <label htmlFor="password" className="sr-only">Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        value={password}
        className="text-white border border-white p-2 m-2 bg-transparent w-full sm:w-3/4 lg:w-1/2"
        onChange={handlechange}
      />
      <p className="text-red-500">{passwordError}</p>

      <label htmlFor="rememberme" className="text-white flex items-center mt-4">
        <input
          type="radio"
          id="rememberme"
          name="rememberme"
          className="border border-white"
          onChange={handlechange}
        />
        <span className="ml-2">Remember me</span>
      </label>

      <button className="hover:bg-transparent border border-white bg-black text-white font-medium py-2 px-4 rounded mt-6">
        Login
      </button>

      <p className="text-white m-2 text-sm sm:text-base">Forgot Password</p>
    </form>
  </div>
</div>

    </>
  );
}

export default Formlogin;
