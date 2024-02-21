import { Header } from "./components/Header"
import { Calculator } from "./components/Calculator";
import "./index.css";
import { ValuesTable } from "./components/ValuesTable";

function App() {
  return (
    <main>
    <Header />
    <h1>Investment Calculator</h1>
    <Calculator />
    <ValuesTable />
    </main>
  )
}

export default App
