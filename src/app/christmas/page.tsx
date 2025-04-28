import { useState, useEffect } from "react";
import { holiday } from "../../../types";

export default function Holiday() {
  const [womenTalkedTo, setWomenTalkedTo] = useState<holiday["womenTalkedTo"]>(null as any);

  useEffect(() => {
    console.log("Finally a woman talked to!", womenTalkedTo);
  }, [womenTalkedTo]);

  const handleTalkToWomen = () => {
    setWomenTalkedTo((prev) => (prev ?? 0) + 1);
  };

  return (
    <div className="items-center justify-start">
      <p>Talk to one yet? LMAO!</p>
      <h2>Women Talked To: {womenTalkedTo ?? "Still nothing..."}</h2>
      <button className="dark:bg-dark dark:text-white" onClick={handleTalkToWomen}>Talk to a Woman</button>
    </div>
  );
}