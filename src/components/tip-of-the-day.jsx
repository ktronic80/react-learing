import React, { useEffect, useState } from "react";

async function fetchData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  const data = await response.json();
  return data.slip.advice;
}
export default function TipOfTheDay() {
  const [tip, setTip] = useState("No tip.");

  useEffect(() => {
    fetchData()
        .then((tip) => setTip(tip));
  }, []);

  return <div>{tip}</div>;
}
