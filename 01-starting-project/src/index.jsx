import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");//root is <div> id from index.html
ReactDOM.createRoot(entryPoint).render(<App />);
