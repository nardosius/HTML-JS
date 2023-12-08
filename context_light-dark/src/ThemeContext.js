import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);//when createContext assigned a ".Provider" must be returned

export const ThemeProvider = ({ children }) => {//any const that is exported can become a tag in App.js
  const [theme, setTheme] = useState("light");//this is a hook to monitor a variable state

  return (//"ThemeContext.Provider" is from "const ThemeContext". Will define theme and toggleTheme
    <ThemeContext.Provider
      value={{//this is an object containing "theme" and "toggletheme"
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);//this is undefined will be defined in App.js
