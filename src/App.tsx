import { useState } from "react";
import "./App.css";
import { Switcher } from "./Switcher/Switcher";
import { Button } from "./Switcher/Button";

function App() {
  let [light, setLight] = useState<boolean>(true);

  let [dark, setDark] = useState<boolean>(true);

  let themSwitch = () => {
    setDark(!dark);
  };

  const appStyle = {
    backgroundColor: dark ? "white" : "#333",
    color: light ? "white" : "black",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <div>
        <Switcher setLight={setLight} light={light} />
        <Button onClick={themSwitch} title="theme" />
      </div>
    </div>
  );
}

export default App;
