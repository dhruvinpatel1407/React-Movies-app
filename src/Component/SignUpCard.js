import React from "react";

function SignUpCard({ Users }) {
  console.log({ Users });
  return (
    <>
      <div className="text-white flex flex-row">
        {Users.map((item) => (
          <div key={item.email} className="m-4 p-4 border border-1 border-white">
            <p>Name : {item.fullname}</p>
            <p>Email : {item.email}</p>
            <p>Password : {item.password}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SignUpCard;
