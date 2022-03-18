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
      {!changedText && <p>Good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={handleText}>Change Text</button>
    </div>
  );
};

export default SayHello;
