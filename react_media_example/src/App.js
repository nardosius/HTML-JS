import './App.css';
import ReactPlayer from "react-player";

function App() {
  const vidUrl = "https://www.youtube.com/watch?v=oXBT8lSC25M"
  return (
    <div className="App">
      <h1>React Player example</h1>
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} controls={true}/>
    </div>
  );
}

export default App;
