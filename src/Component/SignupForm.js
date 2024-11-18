import React, { useState } from "react";

const SignupForm = ({getSignUpData}) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formvalid, setFormValid] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "email") {
      validateEmail(e.target.value);
    } else if (e.target.id === "password") {
      validatePasswod(e.target.value);
    } else if (e.target.id === "name") {
      validateName(e.target.value);
    }
  };

  const validateName = (name) => {
    let error = nameError;
    let valid = formvalid;

    if (!name.trim()) {
      error = "Please Enter you name";
      valid = false;
    } else if (name.trim().length < 3) {
      error = "Please Enter your full Name";
      valid = false;
    } else {
      error = "";
      valid = true;
    }
    setFullName(name);
    setNameError(error);
    setFormValid(valid);
    return valid;
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
      error =
        "Password must have 8 characters , including Digits, Capital & Small letters";
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

    if (
      validateEmail(email) &&
      validatePasswod(password) &&
      validateName(fullname)
    ) {
      alert("Account Created Successfully");

      const userdata = {
        fullname,
        email,
        password,
      };
      getSignUpData(userdata);
      setFullName("");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="relative w-full h-screen bg-black ">
      <div className="absolute mx-[30%] inset-0 bg-white bg-opacity-20 border border-white border-2 ">
        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white"
        >
          <h1 className="text-2xl font-bold mb-4">Signup</h1>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={fullname}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-white text-white"
              placeholder="Enter your name"
            />
            <p className="text-red-500">{nameError}</p>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-white text-white"
              placeholder="Enter your email"
            />
            <p className="text-red-500">{emailError}</p>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-white text-white"
              placeholder="Enter your password"
            />
          </div>
          <p className="mx-4 text-red-500">{passwordError}</p>
          {/* Submit Button */}
          <button
            type="submit"
            className="hover:bg-transparent border border-white bg-black  text-white font-medium py-2 px-4 rounded"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
