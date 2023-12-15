import './App.css';
import { useState, useEffect } from 'react';

//the following is the HOC component. Notice that the name begins as "with"
const withMousePosition = (WrappedComponent) => { //WrappedComponent is a variable
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
      const handleMousePositionChange = (e) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
          });
      };
      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };

    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition}/>
  };
};

const PanelMouseLogger = ({mousePosition}) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="Position">
      <p>Mouse position:</p>
      <div className="Row">
        <span className="gap">x: {mousePosition.x}</span>
        <span className="gap2">y: {mousePosition.y}</span>
      </div>
    </div>
  );
};
 
const PointMouseLogger = ({mousePosition}) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p className="floater">
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🥧</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
