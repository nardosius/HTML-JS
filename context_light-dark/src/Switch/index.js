import "./Styles.css";
import { useTheme } from "../ThemeContext";
// The functional part of the theme switcher is placed in a separate folder in src.
const Switch = () => {
 const { theme, toggleTheme } = useTheme();
 return (
   <label className="switch">
     <input
       type="checkbox"
       checked={theme === "light"}
       onChange={toggleTheme}//the onChange attribute that actually turns the webpage from light to dark
     />
     <span className="slider round" />
   </label>
 );
};

export default Switch;
