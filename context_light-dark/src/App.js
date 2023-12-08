import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";//"useTheme is undefined"
import Switch from "./Switch";//importing the actual onChange attribute

const Title = ({ children }) => {
  const { theme } = useTheme();//theme is undefined in assignment
  return (
    <h2//theme is now defined inside the h2 tag
      style={{//this is an object with a ternary statement as a value
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{//this is an object with a ternary statement as a value
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{//this is where the actual background color is assigned for use by "toggleTheme"
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (//ThemeProvider is a state const defined in ThemeContext.js
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
