import React, { useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");

  const fetchAPI = async () => {
    try {
      const res = await fetch("https://markalderonode.onrender.com/api/message")

      const data = await res.json();
      setMsg(data.message);
    } catch (e) {
      setMsg("Error contacting API");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px", fontFamily: "Arial" }}>
      <h1>React App Deployed to Netlify!</h1>
      <button onClick={fetchAPI} style={{ padding: "12px 20px", fontSize: "16px" }}>
        Contact Node API
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{msg}</p>
    </div>
  );
}
