import { useState, useEffect } from "react";

export default function Holiday() {
  const [womenTalkedTo, setWomenTalkedTo] = useState<number>(null as any);

  useEffect(() => {
    console.log("Finally a woman talked to!", womenTalkedTo);
  }, [womenTalkedTo]);

  const handleTalkToWomen = () => {
    setWomenTalkedTo((prev) => (prev ?? 0) + 1);
  };

  return (
    <div>
      <h1>Women Talked To Tracker</h1>
      <h2>Women Talked To: {womenTalkedTo ?? "Still nothing..."}</h2>
      <button onClick={handleTalkToWomen}>Talk to a Woman</button>
    </div>
  );
}