import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState(0);

  const [submitted, setSubmitted] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    // console.log("email", email);
    fetch("http://localhost:3001/addemail", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }) //.then((res) => res.json());
      .then(function (res) {
        // res = res.json();
        if (res.status == 200) {
          console.log("200");
          setSubmitted(1);
        } else if (res.status == 500) {
          setSubmitted(2);
        } else {
          console.log("not 200");
          setSubmitted(0);
        }
      });
  };

  return (
    <div className="App">
      {submitted === 0 && (
        <div className="App">
          <p>Hello! Subscribe to our mailing list.</p>
          <form onSubmit={submit}>
            <input
              name="email"
              type="email"
              placeholder="enter your email address here"
              onChange={(e) => setEmail(e.target.value)}
              // value={email}
            ></input>
            <input type="submit" value="Subscribe"></input>
          </form>
        </div>
      )}
      {submitted === 1 && (
        <div className="App">
          <p>Thanks for registering</p>
        </div>
      )}
      {submitted === 2 && (
        <div>
          <p>Sorry, something is not working. Try again later.</p>
        </div>
      )}
    </div>
  );
}

export default App;
