import React from "react";
import "./App.css";
import Header from "./components/Header";
import CustomButton from "./components/common/CustomButton";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Content />
    </div>
  );
}

export default App;
