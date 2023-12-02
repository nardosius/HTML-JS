import { useState } from "react";
/*This code uses the map function to iterate over an array that is created by user input as the user types it in. It combines hooks such as useState to monitor changes in input data */
function App() {
  const [data, setData] = useState([]);//empty array
  const [input, setInput] = useState("");//empty user input

  const clickHandler = () => {//event handler for button click
    const tempData = data;//set tempData to data which is an empty array to start
    tempData.push(input);//add the input data to the tempData array
    setData(data);//current state is now the data array
    setInput("");//input is set to empty
    console.log(data);
  };
	
	return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}//standard change handler
      />

      <button onClick={clickHandler}>Add</button>

      {data.length ? (//ternary expression. If there is content in the data array, then map
        <ul>
          {data.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      ) : <p>No data entered</p>}
    </div>//else no map
  );
}


export default App;