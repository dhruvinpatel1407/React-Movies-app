import React, { useState } from "react";

function Feedbackform({ getFeedBackData }) {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [msgError, setMsgError] = useState("");

  const handlechange = (e) => {
   
    if (e.target.id === "fullname") {
      validateName(e.target.value);
    } else if (e.target.id === "email") {
      validateEmail(e.target.value);
    } else if (e.target.id === "phone") {
      validatePhone(e.target.value);
    } else if (e.target.id === "msg") {
      validatemsg(e.target.value);
    }
  };

  const validateName = (name) => {
    let error = nameError;
    let valid = formValid;
    if (name.trim() === "") {
      error = "Please Enter a valid name";
      valid = false;
    } else if (name.trim().length < 3) {
      error = "Name should be at least 3 characters";
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
    let valid = formValid;

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
  const validatePhone = (phone) => {
    let error = phoneError;
    let valid = formValid;

    if (phone.trim() === "") {
      error = "Please Enter a valid contact number";
      valid = false;
    } else if (phone.trim().length !== 10) {
      error = "Contact number should be 10 digits";
      valid = false;
    } else {
      error = "";
      valid = true;
    }

    setPhone(phone);
    setPhoneError(error);
    setFormValid(valid);
    return valid;
  };
  const validatemsg = (msg) => {
    let error = msgError;
    let valid = formValid;
    if (msg.trim() === "") {
      error = "Minimum 50 characters required";
      valid = false;
    } else if (msg.trim().length < 50) {
      error = "Minimum 50 characters required";
      valid = false;
    } else {
      error = "";
      valid = true;
    }

    setMsg(msg);
    setMsgError(error);
    setFormValid(valid);
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateName(fullname) &&
      validateEmail(email) &&
      validatePhone(phone) &&
      validatemsg(msg)
    ) {
      alert("Form is Submitted ");
      const data = {
        fullname,
        email,
        phone,
        msg,
      };

      getFeedBackData(data);
      setFullName("");
      setEmail("");
      setPhone("");
      setMsg("");
    } else {
      alert("Please Enter All Details.");
    }
  };

  return (
    <>
      <div className="relative w-full pt-8 h-screen bg-black">
  <div className="absolute inset-0 mx-4 md:my-36 max-h-screen lg:min-h-screen sm:my-44 lg:my-12 sm:mx-20 lg:mx-[25%] mt-10 bg-white bg-opacity-10 rounded-md ">
    <form
      onSubmit={handleSubmit}
      className="relative z-10 flex flex-col items-center content-center justify-center text-white text-center"
    >
      <h4 className=" text-md font-medium mb-6 sm:text-xl mt-12">
        Please give your valuable feedback here
      </h4>
      <div> 
        {/* Name Field */}
        <div className="mb-6 w-full">
          <label htmlFor="fullname" className="text-left block text-sm font-medium mb-2">
            Name:
          </label>
          <input
            id="fullname"
            placeholder="Enter Name"
            name="fullname"
            type="text"
            value={fullname}
            className="w-full p-2 bg-transparent border border-white text-white rounded"
            onChange={handlechange}
          />
          <p className="text-red-500 text-xs mt-1">{nameError}</p>
        </div>

        {/* Email Field */}
        <div className="mb-6 w-full">
          <label htmlFor="email" className="text-left block text-sm font-medium mb-2">
            Email:
          </label>
          <input
            id="email"
            placeholder="Enter Email"
            name="email"
            type="text"
            value={email}
            className="w-full p-2 bg-transparent border border-white text-white rounded"
            onChange={handlechange}
          />
          <p className="text-red-500 text-xs mt-1">{emailError}</p>
        </div>

        {/* Phone Field */}
        <div className="mb-6 w-full">
          <label htmlFor="phone" className="text-left block text-sm font-medium mb-2">
            Contact No:
          </label>
          <input
            id="phone"
            placeholder="Enter Contact No"
            name="phone"
            type="text"
            value={phone}
           className="w-full p-2 bg-transparent border border-white text-white rounded"
            onChange={handlechange}
          />
          <p className="text-red-500 text-xs mt-1">{phoneError}</p>
        </div>

        {/* Message Field */}
        <div className="mb-4 w-full">
          <label htmlFor="msg" className="text-left block text-sm font-medium mb-2">
            Message:
          </label>
          <textarea
            id="msg"
            placeholder="Enter your feedback"
            name="msg"
            value={msg}
           className="w-full p-2 bg-transparent border border-white text-white rounded"
            onChange={handlechange}
          />
          <p className="text-red-500 text-xs mt-1">{msgError}</p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-black border border-1 border-white text-white font-semibold py-2 px-4 rounded hover:bg-opacity-50 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>

    </>
  );
}

export default Feedbackform;
