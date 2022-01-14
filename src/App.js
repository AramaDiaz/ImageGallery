import React, { useState } from "react";
import "./App.scss";
import ImageSearch from "./components/ImageSearch";
import Pictures from "./components/Pictures";

function App() {
  const [name, setName] = useState("");

  const handleEnter = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      setName(e.target.value);
    }
  };

  return (
    <div className="App">
      <ImageSearch name={name} handlePress={handleEnter} />
      <Pictures name={name} />
    </div>
  );
}

export default App;
