import React, { useState } from "react";
import Api from "../api";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = (e) =>
    /^\S+@\S+\.\S+$/.test(e); /* i adding regex code for validation */

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setMsg(null);
    if (!validate(email)) {
      setMsg({ type: "error", text: "Please enter the valid email" });
      return;
    }
    setLoading(true);
    try {
      await Api.post("/subscribers", { email, date: new Date().toISOString() });
      setMsg({ type: "success", text: "Thanks! Subsribe is done." });
      setEmail("");
    } catch (err) {
      console.log("Newsletter API error =>", err.response?.data || err.message);
      setMsg({
        type: "error",
        text: "Something went wrong. Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="news">
        <h1>Subsribe to get information , latest news and other</h1>
        <h1>interesting offers about Jadoo</h1>
        <div className="container">
          <div className="news-box">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button
              className="btn-primary"
              style={{ background: "tomato", border: "none" }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Subscribe"}
            </button>
          </div>
          {msg && (
            <div
              style={{
                marginTop: 10,
                textAlign: "center",
                color: msg.type === "success" ? "green" : "red",
              }}
            >
              {msg.text}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
