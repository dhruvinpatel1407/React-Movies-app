import { useState } from "react";
import Feedbackform from "./Feedbackform";
import Display from "./Display";

function Feedbackcard() {
  // State to store submitted form data
  const [feedbackData, setFeedbackData] = useState([]);

  const getFeedBackData = (props) => {
    setFeedbackData([...feedbackData, props]);
  };

  return (
    <div className="bg-black pb-20">
      <Feedbackform getFeedBackData={getFeedBackData} />
      <Display feedbackData={feedbackData} />
    </div>
  );
}

export default Feedbackcard;
