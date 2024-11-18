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
      error = "Please enter a valid name";
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
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

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
      alert("Please check your input and try again.");
    }
  };

  return (
    <>
      <div className="relative w-full pt-8 h-screen bg-black">
        <div className="absolute  mx-[30%] mt-10 inset-0 bg-white bg-opacity-10 ">
          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center"
          >
            <h4 className="text-2xl mt-8 mb-4">
              Please give your valuable feedback here
            </h4>
            <div className="mx-auto space-y-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="fullname" className="text-right">
                  Name :
                </label>
                <input
                  id="fullname"
                  placeholder="Enter Name"
                  name="fullname"
                  type="text"
                  value={fullname}
                  className="m-2 px-3 py-2 border rounded bg-transparent col-span-2"
                  onChange={handlechange}
                />
                <p className="text-red-500">{nameError}</p>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="email" className="text-right">
                  Email :
                </label>
                <input
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  type="text"
                  value={email}
                  className="m-2 px-3 py-2 w-100 border rounded bg-transparent col-span-2"
                  onChange={handlechange}
                />
                <p className="text-red-500">{emailError}</p>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="phone" className="text-right">
                  Contact No :
                </label>
                <input
                  id="phone"
                  placeholder="Enter Contact No"
                  name="phone"
                  type="text"
                  value={phone}
                  className="m-2 px-3 py-2 border rounded bg-transparent col-span-2"
                  onChange={handlechange}
                />
                <p className="text-red-500">{phoneError}</p>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="msg" className="text-right">
                  Message :
                </label>
                <textarea
                  id="msg"
                  placeholder="Enter your feedback"
                  name="msg"
                  type="text"
                  value={msg}
                  className= "h-16 m-2 px-3 py-2 border rounded bg-transparent col-span-2"
                  onChange={handlechange}
                  style={{ height: "100%" }}
                />
                <p className="text-red-500">{msgError}</p>
              </div>
            </div>

            <button
              type="submit"
              className="m-4 bg-black border border-1 border-white text-white font-semibold py-2 px-4 rounded hover:bg-opacity-50 "
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
