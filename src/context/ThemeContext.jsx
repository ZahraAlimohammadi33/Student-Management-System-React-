import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [lightTheme, setLightTheme] = useState(false);
  const [light] = useState({
    bg: "#fff",
    syntax: "#fff",
  });
  const [dark] = useState({
    bg: "#000",
    syntax: "#000",
  });

  const changTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ light, dark, changTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
