import React, { useState, useEffect } from "react";

function App() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  
  const day = String(currentDateTime.getDate()).padStart(2, '0');
  const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
  const year = currentDateTime.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Welcome to CHARUSAT!!!!</h1>
      <h2>It is {formattedDate}</h2>
      <h2>It is {formattedTime}</h2>
    </div>
  );
}

export default App;