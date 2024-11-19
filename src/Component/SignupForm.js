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
      // alert("Account Created Successfully");

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
    <div className="relative w-full h-screen bg-black">
  <div className="absolute inset-0 mx-auto max-w-lg w-full bg-white bg-opacity-20 border border-2 border-white">
    <form
      onSubmit={handleSubmit}
      className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-8"
    >
      <h1 className="text-2xl font-bold mb-6 sm:text-3xl">Signup</h1>

      {/* Name Field */}
      <div className="mb-6 w-full sm:w-3/4 lg:w-2/3">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={fullname}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-white text-white rounded"
          placeholder="Enter your name"
        />
        <p className="text-red-500 text-xs mt-1">{nameError}</p>
      </div>

      {/* Email Field */}
      <div className="mb-6 w-full sm:w-3/4 lg:w-2/3">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-white text-white rounded"
          placeholder="Enter your email"
        />
        <p className="text-red-500 text-xs mt-1">{emailError}</p>
      </div>

      {/* Password Field */}
      <div className="mb-6 w-full sm:w-3/4 lg:w-2/3">
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-white text-white rounded"
          placeholder="Enter your password"
        />
        <p className="text-red-500 text-xs mt-1">{passwordError}</p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="hover:bg-transparent border border-white bg-black text-white font-medium py-2 px-4 rounded mt-4"
      >
        Signup
      </button>
    </form>
  </div>
</div>
  );
};

export default SignupForm;
