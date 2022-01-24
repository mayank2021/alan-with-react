import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import DisplayJoke from "./components/DisplayJoke/DisplayJoke";

function App() {
  const [joke, setJoke] = useState("");

  const alanKey = "";

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, joke }) => {
        if (command === "test") {
          alert("test command");
        }
        if (command === "getJoke") {
          setJoke(joke);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <div className="nav">
        <h1>Powered by alan ai</h1>
      </div>
      <DisplayJoke joke={joke} />
    </div>
  );
}

export default App;
