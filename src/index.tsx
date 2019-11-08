import * as React from "react";
import { render } from "react-dom";
import { ThemeSwitch } from "./ThemeSwitch";

import "./styles.css";
import { useTheme } from "./useTheme";

function App() {
  const [theme] = useTheme();

  return (
    <div className={`App ${theme}`}>
      <ThemeSwitch />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
