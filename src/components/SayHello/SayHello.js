import React, { useState } from "react";
import Output from "../Output/Output";
const SayHello = () => {
  const [changedText, setChangedText] = useState(false);
  const handleText = () => {
    setChangedText((prev) => !prev);
  };
  return (
    <div>
      SayHello
      {/*this is an example for nested component: Integration Testing*/}
      {/*if the imported component has some logic then it should be tested seperately */}
      {!changedText && <Output>Good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={handleText}>Change Text</button>
    </div>
  );
};

export default SayHello;
