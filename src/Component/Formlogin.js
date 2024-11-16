import React, { useState } from "react";

function Formlogin() {
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
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    let error = emailError;
    let valid = formvalid;

    if (!regex.test(email)) {
      error = "please enter valid email";
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
      error = "please enter valid password";
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
      alert("Successfully Login");

      const userdata = {
        email,
        password,
      };
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="relative w-full h-screen bg-black ">
        
        <div className="absolute mx-[30%] inset-0 bg-white bg-opacity-10 ">
          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col items-center justify-center h-full text-white"
          >
            <p className="text-white">Get login to acccess you account</p>
            <label htmlFor="email"></label>
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              id="email"
              value={email}
              onChange={handlechange}
              className="text-white border border-white border-1 p-2 m-2 bg-transparent mt-12"
            />
            <p>{emailError}</p>
            <label htmlFor="password"></label>
            <input
              type="text"
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              className="text-white border border-white border-1 p-2 m-2  bg-transparent "
              onChange={handlechange}
            />
            <p>{passwordError}</p>

            <label htmlFor="rememberme" className="text-white">
              <input
                type="radio"
                id="rememberme"
                name="rememberme"
                className="border border-1 border-white"
                onChange={handlechange}
              />
              <span className="ml-2 m-2">Remember me</span>
            </label>

            <br></br>
            <button className="my-4 px-6 py-2 bg-black text-white border border-1 border-white rounded-full hover:bg-white hover:bg-opacity-10 ">
              Login
            </button>

            <p className="text-white m-2">Forgot Password</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Formlogin;