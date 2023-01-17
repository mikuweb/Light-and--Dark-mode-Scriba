import { useState } from "react";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import "./style.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((preToggle) => !preToggle);
  };

  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
