import React from "react";

function Display({ feedbackData }) {
  console.log({ feedbackData });
  const { fullname, phone, email, msg } = feedbackData;
  return (
    <div>
      {feedbackData.map((userdata) => {
        return (
          <div className="max-w-sm mx-auto bg-black bg-opacity-30 border border-1 border-white text-white shadow-lg rounded-lg overflow-hidden my-4 ">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {userdata.fullname}
              </div>
              <p className="text-white text-base">
                <span className="font-semibold">Contact:</span> {userdata.phone}
              </p>
              <p className="text-white text-base">
                <span className="font-semibold">Email:</span> {userdata.email}
              </p>
              <p className="text-white text-base mt-4 d-flex flex-row ">
                <span className="font-semibold ">Feedback:</span> {userdata.msg}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
